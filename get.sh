#!/bin/sh

sourceHead="https://florr.io/static/i18n/en_US"

fileList="
achievements.txt
attributes.txt
changelog.txt
chat.txt
commands.txt
drops.txt
format.txt
maps.txt
mobs.txt
petals.txt
rarities.txt
talents.txt
tutorial.txt
ui.txt
"

for file in $fileList; do
    sourcePath="$sourceHead/$file"
    echo "Downloading from $sourcePath.."
    curl -L "$sourcePath" -o "$file"
done

