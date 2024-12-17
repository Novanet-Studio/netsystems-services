const API_URL = process.env.BDT_API_URL;
const AFILIATED_CODE = process.env.BDT_AFILIATED_CODE;
const BUSSINESS_RIF = process.env.BDT_BUSSINESS_RIF;

async function fetchBdTApi(endpoint: string, body?: any) {
  return fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    body: JSON.stringify({
      ...body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getBanks() {
  return fetchBdTApi("/bancos");
}

export async function getOTP(destination: string) {
  return fetchBdTApi("/lotes/solicitud/clave", {
    canal: "01",
    celularDestino: destination,
  });
}

export async function makePayment(payload: App.MakePaymentPayload) {
  return fetchBdTApi("/botonDePago/pago", {
    ...payload,
    canal: "06",
    RIF: BUSSINESS_RIF,
    codAfiliado: AFILIATED_CODE,
    concepto: getConcept(payload.nombre),
    comercio: "",
  });
}

export async function makeConfirmation(payload: App.MakeConfirmationPayload) {
  return fetchBdTApi("/botonDePago/conformacion", {
    ...payload,
    codAfiliado: AFILIATED_CODE,
    RIF: BUSSINESS_RIF,
  });
}

const getConcept = (name: string): string => {
  const shortName =
    name.trim().split(" ").length > 1 ? name.split(" ")[0] : name;

  return `Pago de servicios de ${shortName}`;
};
