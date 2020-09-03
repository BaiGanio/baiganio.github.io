
export const environment = {
    production: true,
    appUrl: 'https://baiganio.github.io/',
    apiUrl: 'https://free-bgapi.azurewebsites.net/api/',
    idsUrl: 'https://free-is4.azurewebsites.net/',

    // IPCheckingServiceUrl: 'https://ipinfo.io?token=$2e07b81e6d80f2',
    IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
    bgapiSignalRNotyfyHub: 'https://free-bgapi.azurewebsites.net/notify',
    identityServerClientCredentials: {
        client_id: '2',
        client_secret: '123',
        scope: 'scope.bgapi',
        grant_type: 'client_credentials'
    },
    identityServerUserCredentials: {
        client_id: '1',
        client_secret: '123',
        scope: 'scope.bgapi',
        grant_type: 'password'
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
