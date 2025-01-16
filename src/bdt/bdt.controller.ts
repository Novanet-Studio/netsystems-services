import Logger from "../logger";
import { getBanks, getOTP, makeConfirmation, makePayment } from "./bdt.service";

const logger = new Logger("bancoDelTesoro");

export async function getBanksHandler({ set }: App.QueryParams) {
  try {
    const response = await getBanks();
    const json = await response.json();

    logger.info(json[0] || {}, "get_banks");

    return json;
  } catch (error) {
    set.status = "Internal Server Error";

    logger.info(error, "banks_error");

    return {
      status: "Internal Server Error",
      error: "Error interno de servidor",
    };
  }
}

export async function getOTPHandler({ body, set }: App.QueryParams) {
  try {
    const response = await getOTP(body.celularDestino);

    const json = await response.json();

    return json;
  } catch (error) {
    set.status = "Internal Server Error";

    logger.info(error, "get_otp_error");

    return {
      status: "Internal Server Error",
      error: "Error interno de servidor",
    };
  }
}

export async function paymentHandler({ body, set }: App.QueryParams) {
  try {
    const payload = {
      celular: body.celular,
      banco: body.banco,
      cedula: body.cedula,
      monto: body.monto,
      token: body.token,
      nombre: body.nombre,
    };

    const response = await makePayment(payload);

    const json = await response.json();

    logger.info(json, "boton_de_pago_response");

    return json;
  } catch (error) {
    set.status = "Internal Server Error";

    return {
      status: "Internal Server Error",
      error: "Error interno de servidor",
    };
  }
}

export async function conformationHandler({ body, set }: App.QueryParams) {
  try {
    const response = await makeConfirmation(body);
    const json = await response.json();

    return json;
  } catch (error) {
    set.status = "Internal Server Error";

    return {
      status: "Internal Server Error",
      error: "Error interno de servidor",
    };
  }
}
