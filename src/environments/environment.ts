
  import { name, version } from '../../package.json';
  export const environment = {
    production: false,
    name: name,
    version: version,
    appUrl: 'https://baiganio.github.io/',
    apiUrl: 'https://localhost:44364/api/',
    idsUrl: 'https://free-is4.azurewebsites.net/',

    IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
    bgapiSignalRNotyfyHub: 'https://bgapi.azurewebsites.net/notify',
    identityServerClientCredentials: {
      client_id: 'baiganio-local-client',
      client_secret: '123',
      scope: 'scope.bgapi-free',
      grant_type: 'client_credentials',
    },
    identityServerUserCredentials: {
      client_id: 'baiganio-local-user',
      client_secret: '123',
      scope: 'scope.bgapi-free',
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
