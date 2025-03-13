// _data/studio.js
console.log("Studio data file is being processed!");

const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async () => {
  try {
    const url = "https://11ty-from-scratch-content-feeds.piccalil.li/media.json";
    console.log("Fetching data from:", url); // Debugging: Log the URL

    const response = await EleventyFetch(url, {
      duration: "1d",
      type: "json",
    });

    console.log("API response:", response); // Debugging: Log the full response

    const { items } = response;
    console.log("Fetched items:", items); // Debugging: Log the items

    return items;
  } catch (err) {
    console.error("Error fetching data:", err); // Debugging: Log any errors
    return [];
  }
};