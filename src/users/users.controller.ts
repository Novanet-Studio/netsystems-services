import Logger from "../logger";
import { getClientsDetails, getDebt, registerPayment } from "./users.service";

const logger = new Logger("users");

// Handler function to retrieve client details based on provided cedula
export async function getClientsDetailsHandler({ body, set }: App.QueryParams) {
  try {
    const response = await getClientsDetails(body.cedula);
    const json = await response.json();

    return json;
  } catch (error) {
    set.status = "Internal Server Error";

    logger.info(error, "get_client_details_error");

    return {
      estado: "error",
      status: "Internal Server Error",
      message: "Error interno de servidor",
    };
  }
}

// Handler function to retrieve debt information based on provided cedula
export async function getDebtHandler({ body, set }: App.QueryParams) {
  try {
    const response = await getDebt(body.cedula);
    const json = await response.json();

    return json;
  } catch (error) {
    set.status = "Internal Server Error";

    logger.info(error, "consulta_deuda_error");

    return {
      estado: "error",
      status: "Internal Server Error",
      message: "Error interno de servidor",
    };
  }
}

// Handler function to register a payment with the provided details
export async function registerPaymentHandler({ body, set }: App.QueryParams) {
  try {
    const payload = {
      IDFactura: body.IDFactura,
      valor: body.valor,
      fecha: body.fecha,
      secuencial: body.secuencial,
    };

    const response = await registerPayment(payload);
    const json = await response.json();

    return json;
  } catch (error) {
    set.status = "Internal Server Error";

    logger.info(error, "registrar_pago_error");

    return {
      estado: "error",
      status: "Internal Server Error",
      message: "Error interno de servidor",
    };
  }
}
