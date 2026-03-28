import fs from 'fs';
import path from 'path';

const title = process.argv[2];

if (!title) {
  console.log('Usage: npm run new-post "My New Post"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^\w\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

const now = new Date();
const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

const filePath = path.join('src', 'blog', `${slug}.md`);

const content = `---
title: "${title}"
pubDate: ${date}
description: ""
author: "Oscar Harron"
tags:
  - blogging
---

`;

if (fs.existsSync(filePath)) {
  console.log(`File already exists: ${filePath}`);
  process.exit(1);
}

fs.writeFileSync(filePath, content);
console.log(`Created: ${filePath}`);
