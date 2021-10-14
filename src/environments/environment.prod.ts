import { version } from '../../package.json';

export const environment = {
  production: true,
  env: 'production',
  version: version,
  appUrl: 'https://baiganio.github.io/',
  apiUrl: 'https://bgapi.azurewebsites.net/api/',
  idsUrl: 'https://free-is4.azurewebsites.net/',
  todoApiUrl: 'https://vsg-todo-api.azurewebsites.net/api/',

  // IPCheckingServiceUrl: 'https://ipinfo.io?token=$2e07b81e6d80f2',
  IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
  bgapiSignalRNotyfyHub: 'https://bgapi.azurewebsites.net/notify',
  bgapiSignalRChartHub: 'https://bgapi.azurewebsites.net/chart',
  identityServerClientCredentials: {
    client_id: 'baiganio-client',
    client_secret: 'undefined',
    scope: 'scope.bgapi',
    grant_type: 'client_credentials',
  },
  identityServerUserCredentials: {
    client_id: 'baiganio-user',
    client_secret: 'undefined',
    scope: 'scope.bgapi',
    grant_type: 'password',
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
