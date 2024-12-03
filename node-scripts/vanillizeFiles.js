const fs = require('fs');
const path = require('path');

// Input and output directories
const jsSourceDir = path.resolve(__dirname, '../js');
const jsDestDir = path.resolve(__dirname, '../vanilla/js');
const cssSourceDir = path.resolve(__dirname, '../css');
const cssDestDir = path.resolve(__dirname, '../vanilla/css');
const htmlSourceFile = path.resolve(__dirname, '../index.html');
const htmlDestFile = path.resolve(__dirname, '../vanilla/ev-calc.html');
const imagesSourceDir = path.resolve(__dirname, '../public/images');
const imagesDestDir = path.resolve(__dirname, '../vanilla/images');

// Ensure output directories exist
if (!fs.existsSync(jsDestDir)) fs.mkdirSync(jsDestDir, { recursive: true });
if (!fs.existsSync(cssDestDir)) fs.mkdirSync(cssDestDir, { recursive: true });
if (!fs.existsSync(imagesDestDir)) fs.mkdirSync(imagesDestDir, { recursive: true });

// Function to copy JS files
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

// Function to copy CSS files
fs.readdirSync(cssSourceDir).forEach((file) => {
  const sourcePath = path.join(cssSourceDir, file);
  const destPath = path.join(cssDestDir, file);
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Copied CSS: ${file}`);
});

// Function to copy only the `images` folder and its contents
const copyImagesFolder = (srcDir, destDir) => {
  if (fs.existsSync(srcDir) && fs.statSync(srcDir).isDirectory()) {
    // Ensure destination exists
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    // Copy contents of the directory
    fs.readdirSync(srcDir).forEach((file) => {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);

      if (fs.statSync(srcFile).isDirectory()) {
        // Recursively handle subdirectories
        copyImagesFolder(srcFile, destFile);
      } else {
        // Copy files
        fs.copyFileSync(srcFile, destFile);
      }
    });
    console.log(`Copied Images Directory: ${srcDir} → ${destDir}`);
  } else {
    console.error(`Source images directory does not exist: ${srcDir}`);
  }
};

// Perform the images copy
copyImagesFolder(imagesSourceDir, imagesDestDir);

// Replace the specific script tag in HTML
const replacementScripts = ` 
    <script src="./js/constants.js"></script>
    <script src="./js/utils.js"></script>
    <script src="./js/tabManager.js"></script>
    <script src="./js/calculations.js"></script>
    <script src="./js/props.js"></script>
    <script src="./js/changelog.js"></script>
`;

let htmlContent = fs.readFileSync(htmlSourceFile, 'utf-8');

// Replace the specific script tag
htmlContent = htmlContent.replace(
  /<script[^>]*src="\.\/js\/main-bundler\.js"[^>]*><\/script>/,
  replacementScripts
);

// Write the updated HTML
fs.writeFileSync(htmlDestFile, htmlContent, 'utf-8');
console.log(`Copied and updated HTML as: ev-calc.html`);
