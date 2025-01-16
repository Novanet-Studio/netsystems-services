import Logger from "../logger";
import { getUsdVes_dolarApi, getUsdVes_fawazahmed0 } from "./usdves.service";

//import { chromium } from "playwright";

const logger = new Logger("usdVes");

export async function getUsdVesCurrentHandler({ set }: App.QueryParams) {
  const rateDolarApi = await getDolarApi();

  if (rateDolarApi !== "FAILURE ON dolarApi") {
    return {
      status: "SUCCESS",
      rate: rateDolarApi.promedio,
    };
  }

  const rateFawazahmed0 = await getFawazahmed0();

  if (rateFawazahmed0 !== "FAILURE") {
    return {
      status: "SUCCESS",
      rate: 1 / rateFawazahmed0.ves.usd,
    };
  }

  return {
    status: "ERROR",
  };

  async function getDolarApi() {
    try {
      const res = await getUsdVes_dolarApi();
      const result = await res.json();

      return result;
    } catch (error) {
      return "FAILURE ON dolarApi";
    }
  }

  async function getFawazahmed0() {
    try {
      const res = await getUsdVes_fawazahmed0();
      const result = await res.json();

      return result;
    } catch (error) {
      return "FAILURE ON fawazahmed0";
    }
  }
}

/*
export async function getUsdVesCurrentHandler_test() {
  console.log(`<<< getUsdVesCurrentHandler >>>`);

  try {
    logger.info("get_usd_ves_current", "pre browser");

    const browser = await chromium.launch({
      headless: true,
    });

    logger.info("get_usd_ves_current", "post browser");

    return { message: "asd" };
  } catch (e) {
    logger.info(e, "get_usd_ves_current_error");

    return {
      estado: "error",
      status: "Internal Server Error",
      message: "Error interno de servidor",
    };
  }

  // try {
  //   logger.info("get_usd_ves_current", "pre browser");

  //   const browser = await chromium.launch({
  //     headless: true,
  //   });

  //   logger.info("get_usd_ves_current", "post browser");

  //   const page = await browser.newPage();

  //   await page.goto("https://www.bcv.org.ve/");

  //   const convertionCard = await page.$$eval("#dolar", (res) => {
  //     console.log(`<<< res >>>`, res);
  //   });

  //   return { message: "asd" };
  // } catch (error) {
  //   logger.info(error, "get_usd_ves_current_error");

  //   return {
  //     estado: "error",
  //     status: "Internal Server Error",
  //     message: "Error interno de servidor",
  //   };
  // }
}
*/
