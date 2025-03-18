import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const portfolioDir = 'public/images/portfolio';

const excludeDirs = [
  'public/images/portfolio/biocom/biocom.org/high_quality',
  'public/images/portfolio/bright/async_wizard_ux_flow/high_quality'
];

function isInExcludedDir(filePath) {
  return excludeDirs.some(dir => filePath.startsWith(dir));
}

async function convertToWebP(filePath) {
  try {
    if (isInExcludedDir(filePath)) {
      console.log(`Skipping file in excluded directory: ${filePath}`);
      return;
    }

    if (!filePath.toLowerCase().endsWith('.png') && !filePath.toLowerCase().endsWith('.jpg') && !filePath.toLowerCase().endsWith('.jpeg')) {
      return;
    }

    const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
    if (fs.existsSync(outputPath)) {
      console.log(`WebP version already exists: ${outputPath}`);
      return;
    }

    console.log(`Converting: ${filePath} -> ${outputPath}`);
    
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log(`Converted: ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error);
  }
}

async function processDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      await convertToWebP(fullPath);
    }
  }
}

async function main() {
  console.log('Starting PNG/JPG to WebP conversion...');
  await processDirectory(portfolioDir);
  console.log('Conversion complete!');
}

main().catch(error => {
  console.error('Conversion failed:', error);
  process.exit(1);
});

// TODO: This seems to work pretty well...
