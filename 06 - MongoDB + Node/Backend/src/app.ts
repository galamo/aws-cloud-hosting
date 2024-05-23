import cors from "cors";
import express, { Request, Response } from "express";
import appConfig from "./2-utils/app-config";
import dal from "./2-utils/dal";
import catchAll from "./4-middleware/catch-all";
import routeNotFound from "./4-middleware/route-not-found";
import productsController from "./6-controllers/products-controller";

const server = express();

server.use(cors());
server.use(express.json());
server.get("/", (request: Request, response: Response) => response.send("<h1>Welcome to Northwind REST API (Dockerizing MongoDB + Node)</h1>"));
server.use("/api", productsController);
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, async () => {
    await dal.connect();
    console.log(`Listening on http://localhost:${appConfig.port}`);
});
