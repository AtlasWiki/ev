const fs = require('fs');
const path = require('path');

// Input and output directories
const jsSourceDir = path.resolve(__dirname, '../js'); // Updated to point to the correct esm-js directory
const jsDestDir = path.resolve(__dirname, '../vanilla/js'); // Output directory for JS files
const cssSourceDir = path.resolve(__dirname, '../css'); // CSS folder location
const cssDestDir = path.resolve(__dirname, '../vanilla/css'); // Output directory for CSS files
const htmlSourceFile = path.resolve(__dirname, '../vanilla.html'); // HTML file location
const htmlDestFile = path.resolve(__dirname, '../vanilla/ev-calc.html'); // Output HTML file

// Ensure output directories exist
if (!fs.existsSync(jsDestDir)) fs.mkdirSync(jsDestDir, { recursive: true });
if (!fs.existsSync(cssDestDir)) fs.mkdirSync(cssDestDir, { recursive: true });

// Process JavaScript files
fs.readdirSync(jsSourceDir).forEach((file) => {
  if (file.endsWith('.js')) {
    const sourcePath = path.join(jsSourceDir, file);
    const destPath = path.join(jsDestDir, file);

    // Read file and process content
    const content = fs.readFileSync(sourcePath, 'utf-8');
    const processedContent = content
      .split('\n')
      .map((line) => {
        if (line.trim().startsWith('import')) {
          // Remove the entire line if it's an import statement
          return '';
        } else if (line.trim().startsWith('export')) {
          // Remove only the word "export" and retain the rest of the line
          return line.replace(/^\s*export\s*/, '');
        }
        return line;
      })
      .filter((line) => line.trim() !== '') // Remove empty lines from the import removal
      .join('\n');

    // Write processed content to the destination
    fs.writeFileSync(destPath, processedContent, 'utf-8');
    console.log(`Processed & Copied to ${jsDestDir}: ${file}`);
  }
});

// Copy CSS folder
fs.readdirSync(cssSourceDir).forEach((file) => {
  const sourcePath = path.join(cssSourceDir, file);
  const destPath = path.join(cssDestDir, file);
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Copied CSS: ${file}`);
});

// Copy HTML file
fs.copyFileSync(htmlSourceFile, htmlDestFile);
console.log(`Copied HTML as: ev-calc.html`);
