/* eslint-disable no-sync */
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');

module.exports = function copyFolderSync(from, to) {
    let filesToCopy = glob.sync(`${from}/**`);
    fs.removeSync(to);
    filesToCopy.forEach(file => {
        let src = path.resolve(file);
        if (fs.lstatSync(src).isFile()) {
            let dest = src.replace(from, to);
            fs.copySync(src, dest);
        }
    });
}
