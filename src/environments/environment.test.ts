
export const environment = {
    production: false,
    envName: 'test',
    appUrl: 'https://test-baiganio.azurewebsites.net/',
    apiUrl: 'https://test-bgapi.azurewebsites.net/api/',
    idsUrl: 'https://ids4core20.azurewebsites.net/',

    // IPCheckingServiceUrl: 'https://ipinfo.io?token=$2e07b81e6d80f2',
    IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
    bgapiSignalRNotyfyHub: 'https://test-bgapi.azurewebsites.net/notify',
    identityServerClientCredentials: {
        client_id: 'baiganio-test-client',
        client_secret: '8526cfb2-472b-4c40-b704-51d0dbf9edc3',
        scope: 'scope.bgapi-test',
        grant_type: 'client_credentials'
    },
    identityServerUserCredentials: {
        client_id: 'baiganio-test-user',
        client_secret: '8eb2c29f-c0f9-4020-a165-aaf54333aba3t',
        scope: 'scope.bgapi-test',
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
