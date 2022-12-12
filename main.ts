import express from "express";
import cors from "cors";

// External Modules
import RestApi from "./src/apis";
import setlog from "./src/utils/setlog";
import config from "./config.json";

// Get router
const router: express.Router = express.Router();
const app: express.Express = express();

app.use(
    cors({
        origin: "*",
        methods: ["POST", "GET"],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Router
RestApi(router);
app.use("/api", router);

app.listen(config.port, () => {
    setlog(`Server listening port on: ${config.port}`);
});
