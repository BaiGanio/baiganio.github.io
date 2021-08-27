import { name, version } from '../../package.json';
export const environment = {
    production: false,
    env: 'local',
    version: version,
    appUrl: 'http://localhost:5003/',
    apiUrl: 'https://localhost:44364/api/',
    idsUrl: 'https://free-is4.azurewebsites.net/',
    // idsUrl: 'https://localhost:44375/',

    IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
    bgapiSignalRNotyfyHub: 'https://localhost:44364/notify',
    bgapiSignalRChartHub: 'https://localhost:44364/chart',
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
    apiKeys:{
      youtube: 'undefined'
    },
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
