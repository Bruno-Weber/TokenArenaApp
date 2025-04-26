const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d',
    name: 'stadium1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d',
    name: 'stadium2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1518131672697-613becd4fab5',
    name: 'stadium3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c',
    name: 'stadium4.jpg'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

async function downloadAllImages() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  
  for (const image of images) {
    const filepath = path.join(imagesDir, image.name);
    console.log(`Downloading ${image.name}...`);
    try {
      await downloadImage(image.url, filepath);
      console.log(`Successfully downloaded ${image.name}`);
    } catch (err) {
      console.error(`Error downloading ${image.name}:`, err.message);
    }
  }
}

downloadAllImages();
