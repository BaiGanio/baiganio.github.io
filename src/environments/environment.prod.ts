
    import { name, version } from '../../package.json';
    export const environment = {
      production: true,
      name: name,
      version: version,
      appUrl: 'https://baiganio.github.io/',
      apiUrl: 'https://bgapi.azurewebsites.net/api/',
      idsUrl: 'https://free-is4.azurewebsites.net/',

      // IPCheckingServiceUrl: 'https://ipinfo.io?token=$2e07b81e6d80f2',
      IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
      bgapiSignalRNotyfyHub: 'https://bgapi.azurewebsites.net/notify',
      identityServerClientCredentials: {
        client_id: 'undefined',
        client_secret: 'undefined',
        scope: 'scope.bgapi',
        grant_type: 'client_credentials',
      },
      identityServerUserCredentials: {
        client_id: 'undefined',
        client_secret: 'undefined',
        scope: 'scope.bgapi',
        grant_type: 'password',
      },
      apiKey: 'still waiting...',
      routesRequiringUserToken: [
        '/manage',
        '/account',
        '/dashboard',
        '/profile',
        '/admin'
      ]
    };
  