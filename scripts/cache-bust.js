// Cache busting script for images
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const timestamp = Date.now();

// Read the images.json file
const imagesPath = path.join(__dirname, '../src/data/images.json');
const imagesData = JSON.parse(fs.readFileSync(imagesPath, 'utf8'));

// Function to add cache busting to image URLs
function addCacheBusting(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string' && obj[key].includes('/public/')) {
      // Add timestamp as query parameter
      obj[key] = obj[key] + `?v=${timestamp}`;
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      addCacheBusting(obj[key]);
    }
  }
}

// Apply cache busting
addCacheBusting(imagesData);

// Write back to file
fs.writeFileSync(imagesPath, JSON.stringify(imagesData, null, 2));

console.log('✅ Cache busting applied to images.json');
console.log(`🕒 Timestamp: ${timestamp}`);
