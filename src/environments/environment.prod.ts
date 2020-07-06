
export const environment = {
    production: true,
    appUrl: 'https://baiganio.azurewebsites.net/',
    apiUrl: 'https://bgapi.azurewebsites.net/api/',
    idsUrl: 'https://ids4core20.azurewebsites.net/',

    // IPCheckingServiceUrl: 'https://ipinfo.io?token=$2e07b81e6d80f2',
    IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
    bgapiSignalRNotyfyHub: 'https://bgapi.azurewebsites.net/notify',
    identityServerClientCredentials: {
        client_id: 'baiganio-client',
        client_secret: 'd778be0be0ccab2bf30a367edbc3e9a7d21e0f57',
        scope: 'scope.bgapi',
        grant_type: 'client_credentials'
    },
    identityServerUserCredentials: {
        client_id: 'baiganio-user',
        client_secret: '07be7a4e0055ed1278297dfa9b2331f319e6a541',
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
