const fs = require('fs');
const path = require('path');

// Define source and destination paths
const sourceFile = path.resolve(__dirname, '../bundled-inline/index.html');
const destinationFile = path.resolve(__dirname, '../bundled-inline/ev-calc.html');

// Check if the source file exists
if (fs.existsSync(sourceFile)) {
  // Rename the file
  fs.renameSync(sourceFile, destinationFile);
  console.log(`Renamed file: index.html → ev-calc.html`);
} else {
  console.error('Error: index.html not found in the bundled-inline directory.');
}
