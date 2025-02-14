#!/bin/bash
# Befehl zum ausführen: sh cleanup-orphans.sh

DOCS_DIR=("docs/user/" "docs/developer")
DE_DIR="i18n/de/docusaurus-plugin-content-docs/current/"
EXTENSIONS=("*.mdx" "*.md" "*.json")

echo "🔍 Überprüfe gelöschte Seiten..."
for ext in "${EXTENSIONS[@]}"; do
    for file in $(find "$DE_DIR" -name "$ext"); do
        en_file="${DOCS_DIR}${file#$DE_DIR}"
        if [[ ! -f "$en_file" ]]; then
            echo "🗑️  Lösche verwaiste Datei: $file"
            rm "$file"
        fi
    done
done

echo "🧹 Entferne leere Ordner..."
find "$DE_DIR" -type d -empty -delete

echo "✅ Bereinigung abgeschlossen!"
