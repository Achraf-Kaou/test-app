const fs = require('fs');
const path = require('path');

function rimraf(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`Removed: ${dir}`);
  }
}

// Clean workspace node_modules and dist
const packagesDir = 'packages';
if (fs.existsSync(packagesDir)) {
  const packages = fs.readdirSync(packagesDir);
  packages.forEach(pkg => {
    rimraf(path.join(packagesDir, pkg, 'node_modules'));
    rimraf(path.join(packagesDir, pkg, 'dist'));
  });
}

// Clean root node_modules && dist
rimraf('node_modules');
rimraf('dist');