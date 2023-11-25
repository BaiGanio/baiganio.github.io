require("dotenv").config();
const { writeFile } = require('fs');
const targetPath = "./src/environments/environment.prod.ts";

const environmentFileContent = `
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
      client_secret: '${process.env.IS4_BAIGANIO_CLIENT_SECRET}',
      scope: 'scope.bgapi',
      grant_type: 'client_credentials',
    },
    identityServerUserCredentials: {
      client_id: 'baiganio-user',
      client_secret: '${process.env.IS4_BAIGANIO_USER_SECRET}',
      scope: 'scope.bgapi',
      grant_type: 'password',
    },
    apiKeys:{
      youtube: '${process.env.YOUTUBE_API_KEY}'
    },
    routesRequiringUserToken: [
      '/manage',
      '/account',
      '/dashboard',
      '/profile',
      '/admin'
    ]
  };
`;

writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  if (environmentFileContent !== "") {
    console.log(`wrote variables to ${targetPath}`);
  }
});
