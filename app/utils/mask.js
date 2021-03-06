const _ = require('lodash');
const { config } = require('../../config');

const blacklist = (config.api.blacklistMask).split(',');

const getMaskOptions = {
  ignoreCase: false,
  replacement: '*-*-*-*-*'
};

const maskJson = require('mask-json')(blacklist, getMaskOptions);

/**
 * 
 * @param {JSON} data 
 */
const maskSensitiveData = (data) => {
  const shallow = _.cloneDeep(data);
  const masked = maskJson(shallow);
  return JSON.stringify(masked);
};

module.exports = {
  maskSensitiveData
};
