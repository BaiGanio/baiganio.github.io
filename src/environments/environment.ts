
  import { name, version } from '../../package.json';
  export const environment = {
    production: true,
    name: name,
    version: version,
    appUrl: 'https://baiganio.github.io/',
    apiUrl: 'https://bgapi.azurewebsites.net/api/',
    idsUrl: 'https://free-is4.azurewebsites.net/',

    IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
    bgapiSignalRNotyfyHub: 'https://bgapi.azurewebsites.net/notify',
    identityServerClientCredentials: {
      client_id: 'baiganio-client',
      client_secret: '123',
      scope: 'scope.bgapi',
      grant_type: 'client_credentials',
    },
    identityServerUserCredentials: {
      client_id: 'baiganio-user',
      client_secret: '123',
      scope: 'scope.bgapi',
      grant_type: 'password',
    },
    apiKeys:{
      youtube: 'AIzaSyAYU8OKYCoPKdzhFid83EIdehZVITHO5Ag'
    },
    routesRequiringUserToken: [
      '/manage',
      '/account',
      '/dashboard',
      '/profile',
      '/admin'
    ]
  };
