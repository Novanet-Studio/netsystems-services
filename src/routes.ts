import Elysia from "elysia";

import usersRouter from "./users/users.router";

const routes = new Elysia({ prefix: "/v1" });

routes.group("/user", (app) => app.use(usersRouter));

export default routes;
