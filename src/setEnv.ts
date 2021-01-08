require("dotenv").config();
const { writeFile } = require("fs");
const targetPath = "./src/environments/environment.prod.ts";

// Actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = `
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
        client_secret: '${process.env.IS4_BAIGANIO_CLIENT_SECRET}',
        scope: 'scope.bgapi',
        grant_type: 'client_credentials',
      },
      identityServerUserCredentials: {
        client_id: 'baiganio-user}',
        client_secret: '${process.env.IS4_BAIGANIO_USER_SECRET}',
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
  `;

writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  if (environmentFileContent !== "") {
    console.log(`wrote variables to ${targetPath}`);
  }
});
