import Logger from "../logger";
import { getUsdVes1 } from "./usdves.service";

const logger = new Logger("usdVes");

export async function getUsdVes1Handler({ body, set }: App.QueryParams) {
  try {
    const response = await getUsdVes1();

    const json = await response.json();

    return json;
  } catch (error) {
    set.status = "Internal Server Error";

    logger.info(error, "get_usd_ves_1_error");

    return {
      estado: "error",
      status: "Internal Server Error",
      message: "Error interno de servidor",
    };
  }
}
