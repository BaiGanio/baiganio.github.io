require("dotenv").config();
const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');
const environment = argv.environment;

/*
We will create a helper function that allows us to copy the dynamically generated environment variables 
into their respective files. In case the file does not exist, it will create a new file in the given path
*/
function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`wrote ${environment} variables to ${targetPath}`);
    }
  });
}

// Providing path to the `environments` directory
const envDirectory = './src/environments';

// creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

//creates the `environment.prod.ts` and `environment.ts` file if it does not exist
writeFileUsingFS('./src/environments/environment.prod.ts', '');
writeFileUsingFS('./src/environments/environment.ts', '');


// Checks whether command line argument of `prod` was provided signifying production mode
const isProduction = environment === 'prod';

// choose the correct targetPath based on the environment chosen
const targetPath = isProduction
  ? './src/environments/environment.prod.ts'
  : './src/environments/environment.ts';

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
