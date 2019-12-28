const fs = require('fs'),
      copydir = require('copy-dir'),
      shell = require('shelljs'),
      meta = require('./meta.json'),
      data = require('./data.json'),
      indexLayout =require('./_layouts/index.js'),
      itemModule = require('./_modules/item.js');

// Moving static files to site
shell.mkdir('-p', './_site');
shell.rm('-rf', './_site/*');
copydir.sync('./_static', './_site');

// Generating items list
let itemsHTML = data.map((item, index) => {
    return itemModule(index, item.date || "", item.title || "", item.img || "", item.desc || "", item.link || "");
}).join("");

// Making the main index page listing the items
fs.writeFileSync(`./_site/index.html`, indexLayout(
    meta.head, meta.heading, meta.name, itemsHTML
), () => {});