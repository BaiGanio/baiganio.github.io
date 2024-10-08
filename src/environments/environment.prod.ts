
  import { version } from '../../package.json';
  export const environment = {
    production: true,
    env: 'production',
    appUrl: 'https://baiganio.github.io/',
    apiUrl: 'https://test-bgapi.azurewebsites.net/api/',
    idsUrl: 'https://free-is4.azurewebsites.net/',
    todoApiUrl: 'https://vsg-todo-api.azurewebsites.net/api/todo/',

    IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
    bgapiSignalRNotyfyHub: 'https://bgapi-test.azurewebsites.net/notify',
    bgapiSignalRChartHub: 'https://bgapi-test.azurewebsites.net/chart',
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
    apiKeys:{
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
