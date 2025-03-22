/**
 * PDF.js viewer initialization script
 */
class PDFViewer {
  constructor(options) {
    this.container = options.container;
    this.pdfUrl = options.pdfUrl;
    this.pdfjs = window.pdfjsLib;
    this.pdfDoc = null;
    this.pageNum = 1;
    this.pageRendering = false;
    this.pageNumPending = null;
    this.scale = 1.0;
    this.canvas = null;
    this.ctx = null;
    this.initialized = false;
    this.init();
  }

  async init() {
    if (this.initialized) { 
      return;
    }

    this.canvas = document.createElement('canvas');
    this.canvas.className = 'pdf-canvas';
    this.ctx = this.canvas.getContext('2d');
    
    const viewerContainer = document.getElementById(this.container);
    if (!viewerContainer) {
      console.error(`Container element with ID ${this.container} not found`);
      return;
    }
    
    const pdfContainer = viewerContainer.querySelector('.pdf-container');
    if (pdfContainer) {
      pdfContainer.innerHTML = '';
      pdfContainer.appendChild(this.canvas);
    } else {
      console.error('PDF container element not found');
      return;
    }

    try {
      const loadingTask = this.pdfjs.getDocument(this.pdfUrl);
      this.pdfDoc = await loadingTask.promise;

      const pageCount = this.pdfDoc.numPages;
      const pageCounter = viewerContainer.querySelector('.page-counter');
      if (pageCounter) {
        pageCounter.textContent = `1 / ${pageCount}`;
      }
      
      this.renderPage(this.pageNum);
      this.initialized = true;

      this.setupEventListeners(viewerContainer);
    } catch (error) {
      console.error('Error loading PDF:', error);
      if (pdfContainer) {
        pdfContainer.innerHTML = `
          <div class="pdf-error">
            <p>Error loading PDF. Please try again later.</p>
            <p>Error details: ${error.message}</p>
            <p><a href="${this.pdfUrl}" target="_blank">Click here to download the PDF</a></p>
          </div>
        `;
      }
    }
  }

  setupEventListeners(container) {
    const zoomInBtn = container.querySelector('.zoom-in');
    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', () => {
        if (this.scale < 3.0) {
          this.scale += 0.25;
          this.queueRenderPage(this.pageNum);
        }
      });
    }

    const zoomOutBtn = container.querySelector('.zoom-out');
    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', () => {
        if (this.scale > 0.5) {
          this.scale -= 0.25;
          this.queueRenderPage(this.pageNum);
        }
      });
    }

    const prevPageBtn = container.querySelector('.prev-page');
    if (prevPageBtn) {
      prevPageBtn.addEventListener('click', () => {
        if (this.pageNum <= 1) return;
        this.pageNum--;
        this.queueRenderPage(this.pageNum);
      });
    }
    const nextPageBtn = container.querySelector('.next-page');
    if (nextPageBtn) {
      nextPageBtn.addEventListener('click', () => {
        if (this.pageNum >= this.pdfDoc.numPages) return;
        this.pageNum++;
        this.queueRenderPage(this.pageNum);
      });
    }
  }

  /**
   * Get page info from document, resize canvas accordingly, and render page.
   * @param num Page number.
   */
  async renderPage(num) {
    this.pageRendering = true;
    
    try {
      const page = await this.pdfDoc.getPage(num);
      const container = document.getElementById(this.container);
      const pageCounter = container.querySelector('.page-counter');

      if (pageCounter) {
        pageCounter.textContent = `${num} / ${this.pdfDoc.numPages}`;
      }
      
      const viewport = page.getViewport({ scale: this.scale });
      this.canvas.height = viewport.height;
      this.canvas.width = viewport.width;

      const renderContext = {
        canvasContext: this.ctx,
        viewport: viewport
      };
      
      const renderTask = page.render(renderContext);

      await renderTask.promise;
      this.pageRendering = false;

      if (this.pageNumPending !== null) {
        this.renderPage(this.pageNumPending);
        this.pageNumPending = null;
      }
    } catch (error) {
      console.error('Error rendering PDF page:', error);
      this.pageRendering = false;
    }
  }

  /**
   * If another page rendering in progress, wait until the rendering is
   * finished. Otherwise, execute rendering immediately.
   */
  queueRenderPage(num) {
    if (this.pageRendering) {
      this.pageNumPending = num;
    } else {
      this.renderPage(num);
    }
  }
}

window.PDFViewer = PDFViewer;
