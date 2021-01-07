require('dotenv').config();
const { writeFile, existsSync, mkdirSync } = require('fs');
const targetPath = './src/environments/environment.prod.ts';

function writeFileUsingFS(targetPath: string, environmentFileContent: string) {
  writeFile(targetPath, environmentFileContent, function (err: any) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}
// Actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = 
  `
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
        client_id: '${process.env.IS4_BaiGanio_Client}',
        client_secret: '${process.env.IS4_BaiGanio_Client_Secret}',
        scope: 'scope.bgapi',
        grant_type: 'client_credentials',
      },
      identityServerUserCredentials: {
        client_id: ${process.env.IS4_BaiGanio_User},
        client_secret: ${process.env.IS4_BaiGanio_User_Secret},
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

// Appending data into the target file
writeFileUsingFS(targetPath, environmentFileContent);