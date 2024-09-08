const AUTHENTICATOR_URLS = {
  development: "https://staging-authenticator-api.oobicar.com",
  staging: "https://staging-authenticator-api.oobicar.com",
  production: "https://authenticator-api.helloparts.com",
  pre_prod: "https://authenticator-api.p2double-t.de",
};

const ADMIN_URLS = {
  development: "https://staging-admin-api.oobicar.com/api",
  staging: "https://staging-admin-api.oobicar.com/api",
  production: "https://admin-api.helloparts.com/api",
  pre_prod: "https://admin-api.p2double-t.de/api",
};

const CENTRAL_PORTAL_URLS = {
  development: "https://staging-central-portal.oobicar.com",
  staging: "https://staging-central-portal.oobicar.com",
  production: "https://helloparts.com",
  pre_prod: "https://p2double-t.de",
};

const WORKSHOP_URLS = {
  development: "https://staging-workshop-api.oobicar.com/api",
  staging: "https://staging-workshop-api.oobicar.com/api",
  production: "https://workshop-api.helloparts.com/api",
  pre_prod: "https://workshop-api.p2double-t.de/api",
};

const WORKSHOP_PORTAL_URLS = {
  development: "https://staging-workshop-portal.oobicar.com",
  staging: "https://staging-workshop-portal.oobicar.com",
  production: "https://workshop.helloparts.com/",
  pre_prod: "https://workshop.p2double-t.de",
};

// eslint-disable-next-line no-undef
const currentEnv = process.env.REACT_APP_NODE_ENV;

export const AUTH_URL = AUTHENTICATOR_URLS[currentEnv];
export const BE_STAGING_CENTRAL_URL = CENTRAL_PORTAL_URLS[currentEnv];
export const BE_ROOT_URL = ADMIN_URLS[currentEnv];
export const WORKSHOP_URL = WORKSHOP_URLS[currentEnv];
export const WORKSHOP_PORTAL_URL = WORKSHOP_PORTAL_URLS[currentEnv];

export const DASHBOARD_PATH = "dashboard";
export const WORKSHOP_PATH = "workshops";
export const WORKSHOP_ACCOUNT_PATH = "workshop-accounts";
export const AUFTRAG_PATH = "auftrags";
export const ACCOUNTS_PATH = "accounts";
export const REPORT_PATH = "reports";
export const ORDERS_PATH = "orders";
export const LEADS_PATH = "leads";
export const CONTACT_INFO_PATH = "contact-info";

export const WORKSHOP_API = `${BE_ROOT_URL}/v1/workshops`;
export const WORKSHOP_ACCOUNTS_API = `${BE_ROOT_URL}/v1/workshops/accounts`;
export const ACCOUNT_DETAILS_API = `${BE_ROOT_URL}/v1/users`;
export const GET_ALL_AUFTRAGS_API = `${BE_ROOT_URL}/v1/auftrag`;
export const LOGIN_URL = `${BE_STAGING_CENTRAL_URL}/login`;
export const GET_ALL_DMS_API = `${BE_ROOT_URL}/v1/dms`;
export const PART_DEALERS_LISTING = `${BE_ROOT_URL}/v1/part-dealers`;

export const LEADS_LISTING_API = `${BE_ROOT_URL}/v1/leads`;

export const FETCH_AUFTRAG_DATA = `${BE_ROOT_URL}/v1/auftrag`;
export const GET_PROFILE_DATA = `${BE_ROOT_URL}/v1/user`;
export const LOGOUT_API = `${AUTH_URL}/api/v1/logout`;
export const WORKSHOP_ANALYTICS_API_BASE_URL = `${WORKSHOP_URL}/v1/analytics`;
export const BULK_UPLOAD_LEADS_API = `${WORKSHOP_URL}/v1/lead/bulk-upload`;

export const WORKSHOP_USER_PROXY_API = `${BE_ROOT_URL}/v1/workshops/users`;
export const GET_CONTACT_INFO_API = `${BE_ROOT_URL}/v1/inquiry-info`;
export const RESET_PASSWORD_URL = `${BE_STAGING_CENTRAL_URL}/reset-password`;

export const ADMIN_ANALYTICS_API_BASE_URL = `${BE_ROOT_URL}/v1/analytics`;
