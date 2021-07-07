import { domain, clientId } from '../app/auth_config.json';


export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin
  }
};


