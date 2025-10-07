// src/services/config.js
import Config from 'react-native-config';
export const AppConfig = {
  apiBaseUrl: Config.apiBaseUrl,
  appName: Config.appName,
  debugMode: Config.debugMode === 'true',
  version: Config.version,
};
export default AppConfig;
