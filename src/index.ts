/// elysia's imports
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { logger } from "@chneau/elysia-logger";

/// others
import routes from "./routes";

const port = Number(process.env.PORT) || 8001;

const app = new Elysia({ prefix: "/api" });

//- App Cors manager
app.use(cors());

//- App Logger
app.use(logger());

//? test connection
app.get("/testConnection", () => "Netsystems Services is responding");

// Routes
app.use(routes);

//- Run server
app.listen(port);

console.log(`>>> 🦊 Netsystems Services running | PORT:${port} >>>`);
