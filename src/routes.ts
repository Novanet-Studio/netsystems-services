import Elysia from "elysia";

import usersRouter from "./users/users.router";

//> banks
import bdtRouter from "./bdt/bdt.router";

const routes = new Elysia({ prefix: "/v1" });

routes.group("/user", (app) => app.use(usersRouter));

//> banks
routes.group("/bdt", (app) => app.use(bdtRouter));

export default routes;
