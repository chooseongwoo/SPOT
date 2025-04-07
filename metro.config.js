const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);
config.resolver.resolveRequest = null;

module.exports = config;
