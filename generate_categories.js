const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');

function createCategoryJson(directory) {
    const categoryJsonPath = path.join(directory, '_category_.json');

    if (!fs.existsSync(categoryJsonPath)) {
        const categoryName = path.basename(directory);
        const categoryJsonContent = {
            label: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
            position: 1,
            link: {
                type: "generated-index",
                description: `Index-Seite für ${categoryName}`
            }
        };

        fs.writeFileSync(categoryJsonPath, JSON.stringify(categoryJsonContent, null, 4));
        console.log(`✅ Erstellt: ${categoryJsonPath}`);
    }
}

function scanDirectories(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            createCategoryJson(fullPath);
            scanDirectories(fullPath);
        }
    });
}

// Starte den Scan im "docs"-Verzeichnis
scanDirectories(docsDir);
