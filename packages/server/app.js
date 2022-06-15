// dependencies
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import bodyParser from 'body-parser';
import { config as dotenv } from 'dotenv';
// routes
import rootRouter from './routes/rootRouter.js';
import clientStaticPath from './config/clientStaticPath.js';

let dotenvPath = "./.env";
if(process.env.NODE_ENV === "development") {
  dotenvPath = "./.env.dev";
}

dotenv({ path: dotenvPath });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.SERVER_PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(clientStaticPath());

app.use(express.static(clientStaticPath()));
app.use('/', rootRouter);

app.listen(port, () => console.log(`DNDLER listening on port ${port}!`));

