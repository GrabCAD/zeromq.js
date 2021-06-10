'use strict';

const electronRebuild = require("electron-rebuild");
const path = require("path");
electronRebuild.rebuild({buildPath: path.resolve(__dirname, ".."), electronVersion: "12.0.3", force: true});