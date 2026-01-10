const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512];
const inputImage = path.join(__dirname, '..', 'public', 'vishwak_professional.png');
const outputDir = path.join(__dirname, '..', 'public', 'icons');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateIcons() {
  console.log('Generating PWA icons from vishwak_professional.png...');
  
  for (const size of sizes) {
    const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
    
    await sharp(inputImage)
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(outputPath);
    
    console.log(`✓ Generated icon-${size}x${size}.png`);
  }

  // Generate favicon.ico (copy 32x32 as favicon)
  const faviconPath = path.join(__dirname, '..', 'public', 'favicon.ico');
  await sharp(inputImage)
    .resize(32, 32, {
      fit: 'cover',
      position: 'center'
    })
    .png()
    .toFile(faviconPath);
  console.log('✓ Generated favicon.ico');
  
  console.log('\n🎉 All icons generated successfully from vishwak_professional.png!');
}

generateIcons().catch(console.error);
