
  import { name, version } from '../../package.json';
  export const environment = {
    production: false,
    env: 'default',
    name:'',
    version:'',
    appUrl: '',
    apiUrl: '',
    idsUrl: '',
    IPCheckingServiceUrl: '',
    bgapiSignalRNotyfyHub: '',
    bgapiSignalRChartHub: '',
    identityServerClientCredentials: {
      client_id: '',
      client_secret: '',
      scope: '',
      grant_type: ''
    },
    identityServerUserCredentials: {
      client_id: '',
      client_secret: '',
      scope: '',
      grant_type: ''
    },
    apiKeys:{
      youtube: ''
    },
    routesRequiringUserToken: [
      '',
      '',
      ''
    ]
  };
