const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Function to create a zip file
function createZip(outputPath, sourceDir) {
  // Ensure the output file or directory does not exist before creating the zip
  if (fs.existsSync(outputPath)) {
    if (fs.lstatSync(outputPath).isDirectory()) {
      fs.rmSync(outputPath, { recursive: true, force: true }); // Use fs.rm() for removal
    } else {
      fs.unlinkSync(outputPath); // Remove file if it's a file
    }
  }

  const output = fs.createWriteStream(outputPath);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', function () {
    console.log(`Zipped ${archive.pointer()} total bytes to ${path.basename(outputPath)}`);
  });

  archive.on('error', function (err) {
    throw err;
  });

  archive.pipe(output);
  archive.directory(sourceDir, false); // Add sourceDir content to the zip
  archive.finalize();
}

// Paths for standalone.zip
const standaloneOutputPath = path.join(__dirname, '../standalone.zip');
const standaloneSourceDir = path.join(__dirname, '../bundled-inline/'); // Update to 'bundled'

// Paths for raw.zip
const rawOutputPath = path.join(__dirname, '../raw.zip');
const rawSourceDir = path.join(__dirname, '../vanilla/'); // Ensure this directory is correctly populated

// Create standalone.zip
createZip(standaloneOutputPath, standaloneSourceDir);

// Create raw.zip
createZip(rawOutputPath, rawSourceDir);
