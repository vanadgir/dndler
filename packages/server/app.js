// dependencies
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import bodyParser from 'body-parser';
import { config as dotenv } from 'dotenv';
import workspacesRoot from 'find-yarn-workspace-root';
// routes
import rootRouter from './routes/rootRouter.js';

dotenv({ path: `${workspacesRoot()}/.env.dev` });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.SERVER_PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, `${process.env.STATIC_LOCATION}`)));
app.use('/', rootRouter);

app.listen(port, () => console.log(`DNDLER listening on port ${port}!`));

