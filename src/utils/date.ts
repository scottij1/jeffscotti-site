/**
 * Format a date into a readable string
 * @param date The date to format
 * @returns A formatted date string (e.g., "March 23, 2025")
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Format a date into a machine-readable ISO string
 * @param date The date to format
 * @returns An ISO date string
 */
export function formatISODate(date: Date): string {
  return date.toISOString();
}

/**
 * Calculate the reading time for a given text
 * @param text The text to calculate reading time for
 * @param wordsPerMinute The average reading speed in words per minute
 * @returns The estimated reading time in minutes
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}
