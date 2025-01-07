import Elysia from "elysia";

import usersRouter from "./users/users.router";
import usdVesRouter from "./usdves/usdves.router";

//> banks
import bdtRouter from "./bdt/bdt.router";

const routes = new Elysia({ prefix: "/v1" });

routes.group("/user", (app) => app.use(usersRouter));
routes.group("/usdVes", (app) => app.use(usdVesRouter));

//> banks
routes.group("/bdt", (app) => app.use(bdtRouter));

export default routes;
