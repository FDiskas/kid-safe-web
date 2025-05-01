/**
 * Checks if a URL is safe for kids
 * @param url The URL to check
 * @returns Promise with safety check result
 */
export const checkUrlSafety = async (
  url: string
): Promise<{ url: string; status: boolean }> => {
  try {
    // Add https if it's missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    // Extract domain from the URL
    const domain = new URL(url).hostname.replace(/^www\./, '');

    // Make the API call
    const response = await fetch(
      `https://is.coders.lt/?site=${encodeURIComponent('https://' + domain)}`
    );

    if (!response.ok) {
      throw new Error('Failed to check URL safety');
    }

    return await response.json();
  } catch (error) {
    console.error('Error checking URL safety:', error);
    throw error;
  }
};
