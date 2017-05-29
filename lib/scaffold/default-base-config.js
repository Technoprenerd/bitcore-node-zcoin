'use strict';

var path = require('path');

/**
 * Will return the path and default bitcore-node-dash configuration on environment variables
 * or default locations.
 * @param {Object} options
 * @param {String} options.network - "testnet" or "livenet"
 * @param {String} options.datadir - Absolute path to bitcoin database directory
 */
function getDefaultBaseConfig(options) {
  if (!options) {
    options = {};
  }
  var datadir = options.datadir || path.resolve(process.env.HOME, '.zcoin');

  return {
    path: process.cwd(),
    config: {
      network: options.network || 'livenet',
      port: 8168,
      services: ['bitcoind', 'web'],
      servicesConfig: {
        bitcoind: {
          spawn: {
            exec: path.resolve(__dirname, datadir,'zcoind')
          }
        }
      }
    }
  };
}

module.exports = getDefaultBaseConfig;
