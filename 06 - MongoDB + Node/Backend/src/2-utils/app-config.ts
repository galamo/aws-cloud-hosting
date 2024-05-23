import dotenv from "dotenv";
dotenv.config();

class AppConfig {
    public readonly port = +process.env.PORT;
    public readonly mongodbConnectionString = process.env.MONGODB_CONNECTION_STRING;
}

const appConfig = new AppConfig();

export default appConfig;
