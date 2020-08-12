const Cache = require('@11ty/eleventy-cache-assets');
require('dotenv').config();
/**
 * Grabs the remote data for images and returns back
 * an array of objects
 *
 * @returns {Array} Empty or array of objects
 */
module.exports = async () => {
  try {
    // Grabs either the fresh remote data or cached data (will always be fresh live)
    const items = await Cache(
      `https://api.unsplash.com/users/wohfab/photos?per_page=5&order_by=popular&client_id=${process.env.UNSPLASH_API_KEY}`,
      {
        duration: '1d', // 1 day
        type: 'json'
      }
    );
    return items;
  } catch (ex) {
    console.log(ex);

    // If failed, return back an empty array
    return [];
  }
};