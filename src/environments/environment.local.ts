export const environment = {
    production: false,
    envName: 'local',
    appUrl: 'http://localhost:5003/',
    apiUrl: 'https://localhost:44364/api/',
    idsUrl: 'https://free-is4.azurewebsites.net/',
    //idsUrl: 'https://localhost:44375/',

    // IPCheckingServiceUrl: 'https://ipinfo.io?token=$2e07b81e6d80f2',
    IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
    bgapiSignalRNotyfyHub: 'https://localhost:44344/notify',
    identityServerClientCredentials: {
        client_id: 'bg-local-client',
        client_secret: '123',
        scope: 'scope.bgapi-free',
        grant_type: 'client_credentials'
    },
    identityServerUserCredentials: {
        client_id: 'bg-local-user',
        client_secret: '123',
        scope: 'scope.bgapi-free',
        grant_type: 'password'
    },
    apiKey: 'still-waiting',
    routesRequiringUserToken: [
        '/manage',
        '/account',
        '/dashboard',
        '/profile'
    ],
    routesRequiringBackOfficeToken: [
        '/admin'
    ]
};
