import { version } from '../../package.json';
export const environment = {
  production: false,
  env: 'test',
  appUrl: 'https://test-baiganio.azurewebsites.net/',
  apiUrl: 'https://test-bgapi.azurewebsites.net/api/',
  idsUrl: 'https://ids4core20.azurewebsites.net/',
  todoApiUrl: 'https://localhost:44338/api/todo/',

  // IPCheckingServiceUrl: 'https://ipinfo.io?token=$2e07b81e6d80f2',
  IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
  bgapiSignalRNotyfyHub: 'https://test-bgapi.azurewebsites.net/notify',
  bgapiSignalRChartHub: 'https://test-bgapi.azurewebsites.net/chart',
  identityServerClientCredentials: {
    client_id: 'baiganio-test-client',
    client_secret: 'test',
    scope: 'scope.bgapi-test',
    grant_type: 'client_credentials'
  },
  identityServerUserCredentials: {
    client_id: 'baiganio-test-user',
    client_secret: 'test',
    scope: 'scope.bgapi-test',
    grant_type: 'password'
  },
  apiKeys: {
    youtube: 'undefined'
  },
  routesRequiringUserToken: [
    '/manage',
    '/account',
    '/dashboard',
    '/profile',
    '/admin'
  ]
};
