// @flow

let isNodeModules = (filePath /* : string */) /* : boolean */ => {
  return filePath.includes('/node_modules/');
};

module.exports = isNodeModules;
