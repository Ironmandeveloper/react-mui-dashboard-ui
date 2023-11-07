import { SettingsValueProps } from './components/settings/type';
// routes
import { PATH_DASHBOARD } from './routes/paths';

// API
// ----------------------------------------------------------------------

export const HOST_API = process.env.REACT_APP_HOST_API_KEY || '';

export const FIREBASE_API = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const COGNITO_API = {
  userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
  clientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID,
};

export const AUTH0_API = {
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
};

export const MAPBOX_API = process.env.REACT_APP_MAPBOX;

export const GOOGLE_ANALYTICS_API = process.env.REACT_APP_GA_MEASUREMENT_ID;

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.general.app; // as '/dashboard/app'

// LAYOUT
// ----------------------------------------------------------------------

export const DRAWER_WIDTH = 260;

export const DASHBOARD_HEADER_MOBILE = 64;
export const DASHBOARD_HEADER_DESKTOP = 92;
export const DASHBOARD_NAVBAR_WIDTH = 280;
export const DASHBOARD_NAVBAR_COLLAPSE_WIDTH = 88;

export const DASHBOARD_NAVBAR_ROOT_ITEM_HEIGHT = 48;
export const DASHBOARD_NAVBAR_SUB_ITEM_HEIGHT = 40;
export const DASHBOARD_NAVBAR_ICON_ITEM_SIZE = 22;

export const MAIN_HEADER_DESKTOP = 88;
export const MAIN_HEADER_MOBILE = 64;

// SETTINGS
// ----------------------------------------------------------------------

export const defaultSettings: SettingsValueProps = {
  themeMode: 'light',
  themeDirection: 'ltr',
  themeColorPresets: 'default',
  themeStretch: false,
};
