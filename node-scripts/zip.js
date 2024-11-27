const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const outputPath = path.join(__dirname, '../standalone.zip');

// Ensure the output file or directory does not exist before creating the zip
if (fs.existsSync(outputPath)) {
  if (fs.lstatSync(outputPath).isDirectory()) {
    fs.rmSync(outputPath, { recursive: true, force: true });  // Use fs.rm() for removal
  } else {
    fs.unlinkSync(outputPath);  // Remove file if it's a file
  }
}

const output = fs.createWriteStream(outputPath);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', function () {
  console.log(`Zipped ${archive.pointer()} total bytes`);
});

archive.on('error', function (err) {
  throw err;
});

archive.pipe(output);
archive.directory(path.join(__dirname, '../bundled/'), false);  // Update to 'bundled'
archive.finalize();
