import { version } from '../../package.json';
export const environment = {
  production: false,
  env: 'test',
  appUrl: 'http://localhost:5003/',
  apiUrl: 'https://test-bgapi.azurewebsites.net/api/',
  idsUrl: 'https://free-is4.azurewebsites.net/',

  IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
  bgapiSignalRNotyfyHub: 'https://test-bgapi.azurewebsites.net/notify',
  bgapiSignalRChartHub: 'https://test-bgapi.azurewebsites.net/chart',
  identityServerClientCredentials: {
      client_id: 'baiganio-local-client',
      client_secret: '123',
      scope: 'scope.bgapi-free',
      grant_type: 'client_credentials'
  },
  identityServerUserCredentials: {
      client_id: 'baiganio-local-user',
      client_secret: '123',
      scope: 'scope.bgapi-free',
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
