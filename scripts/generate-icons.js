const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Primeiro, vamos criar um buffer com o ícone em SVG
const svgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="256" cy="256" r="240" stroke="url(#gradient)" stroke-width="32"/>
  <path d="M200 256 L256 150 L312 256 L256 362 Z" fill="url(#gradient)"/>
  <circle cx="180" cy="256" r="20" fill="url(#gradient)"/>
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#D946EF"/>
    </linearGradient>
  </defs>
</svg>`;

const publicDir = path.join(__dirname, '..', 'public');

const sizes = {
  'icon.png': 32,
  'icon-192.png': 192,
  'icon-512.png': 512,
  'apple-icon.png': 180
};

async function generateIcons() {
  // Gera todos os tamanhos em PNG
  for (const [filename, size] of Object.entries(sizes)) {
    const outputPath = path.join(publicDir, filename);
    
    try {
      await sharp(Buffer.from(svgIcon))
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`Generated ${filename} (${size}x${size})`);
    } catch (err) {
      console.error(`Error generating ${filename}:`, err);
    }
  }
}

generateIcons();
