import { writeFile, existsSync, mkdirSync } from 'fs';
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;


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

// Providing path to the `environments` directory
const envDirectory = './src/environments';

// Creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

// Creates the `environment.prod.ts` and `environment.ts` file if it does not exist
writeFileUsingFS('./src/environments/environment.prod.ts', '');
writeFileUsingFS('./src/environments/environment.local.ts', '');

// Checks whether command line argument of `prod` was provided signifying production mode
const isProduction = environment === 'prod';

// Choose the correct targetPath based on the environment chosen
const targetPath = isProduction
  ? './src/environments/environment.prod.ts'
  : './src/environments/environment.local.ts';

// Actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = 
  `
    import { name, version } from '../../package.json';
    export const environment = {
      production: ${isProduction},
      name: name,
      version: version,
      appUrl: 'https://baiganio.github.io/',
      apiUrl: 'https://bgapi.azurewebsites.net/api/',
      idsUrl: 'https://free-is4.azurewebsites.net/',

      // IPCheckingServiceUrl: 'https://ipinfo.io?token=${process.env.IPINFO_TOKEN}',
      IPCheckingServiceUrl: 'https://api.ipify.org?format=json',
      bgapiSignalRNotyfyHub: 'https://bgapi.azurewebsites.net/notify',
      identityServerClientCredentials: {
        client_id: '${process.env.IS4_BaiGanio_Client}',
        client_secret: '${process.env.IS4_BaiGanio_Client_Secret}',
        scope: 'scope.bgapi',
        grant_type: 'client_credentials',
      },
      identityServerUserCredentials: {
        client_id: '${process.env.IS4_BaiGanio_User}',
        client_secret: '${process.env.IS4_BaiGanio_User_Secret}',
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