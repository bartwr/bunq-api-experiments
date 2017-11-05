import { BunqKey, BunqApi, BunqApiConfig, BunqApiSetup, 
BunqConnection, BunqServerConnection, SessionCreator 
} from 'bunq-api';

const config:BunqApiConfig = new BunqApiConfig();
const deviceServerConfig = BunqApiConfig.readJson(config.json.secretsFile);
const privateKeyPem:string=BunqApiConfig.read(config.json.privateKeyFile);
const key : BunqKey = new BunqKey(privateKeyPem);
const installationTokenConfig = BunqApiConfig.readJson(config.json.installationTokenFile);
const installationToken:string=installationTokenConfig.Response[1].Token.token;
const connect:BunqConnection = new BunqConnection();
const setup:BunqApiSetup=new BunqApiSetup(connect,key,deviceServerConfig.secret,installationToken);
const bunqApi:BunqApi=new BunqApi(connect, key,deviceServerConfig.secret,setup,
    config.json.bunqSessionFile, config.json.bunqSessionHistoryPath);

bunqApi.setPubBunqKeyPem(installationTokenConfig.Response[2].ServerPublicKey.server_public_key);

bunqApi.requestUser().then((response:string)=>{
    console.log(response);
}).catch(function(error:string){
    console.log("error : "+error);
});
