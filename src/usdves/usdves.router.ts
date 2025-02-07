import { Elysia } from "elysia";
import { getUsdVesCurrentHandler } from "./usdves.controller";

const usdVesRouter = new Elysia();

usdVesRouter.get("/getUsdVesCurrent", getUsdVesCurrentHandler);
//usdVesRouter.get("/getUsdVesCate1", getUsdVesCurrentHandler);

export default usdVesRouter;
