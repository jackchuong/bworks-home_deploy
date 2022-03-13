/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dirs = [
  ['i18n/vi', '.locales/vi'],
  ['i18n/en', '.locales/en'],
];

dirs.map((dir) => {
  const srcPath = path.join(__dirname, dir[0]);
  const dstPath = path.join(__dirname, dir[1]);
  // console.log(dstPath);
  execSync(`mkdir -p ${dstPath}`);
  execSync(`rm -f ${dstPath}/*.json`);

  // create i18n.json
  execSync(`rm -f ` + path.join(process.cwd(), `i18n.json`));
  const i18n = require('./i18n');
  fs.writeFileSync(path.join(process.cwd(), `i18n.json`), JSON.stringify(i18n, null, ' '), {
    encoding: 'utf8',
    flag: 'w',
  });

  const files = fs.readdirSync(srcPath);
  files.forEach((fileName) => {
    const fileInfo = path.parse(fileName);
    // console.log(fileInfo);
    if (fileInfo.ext === '.js') {
      const contentObj = require(`./${dir[0]}/${fileName}`);
      const contentString = JSON.stringify(contentObj, null, ' ');
      // write to public folder
      fs.writeFileSync(path.join(dstPath, `${fileInfo.name}.json`), contentString, { encoding: 'utf8', flag: 'w' });
    }
  });
});
