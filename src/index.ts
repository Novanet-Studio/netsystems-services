/// elysia's imports
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { logger } from "@chneau/elysia-logger";

const port = Number(process.env.PORT) || 8001;

const app = new Elysia();

//- App Cors manager
app.use(cors());

//- App Logger
app.use(logger());

//? test connection
app.get("/testConnection", () => "Netsystems Services is responding");

//- Run server
app.listen(port);

console.log(`>>> 🦊 Netsystems Services running | PORT:${port} >>>`);
