const API_KEY = process.env.MIKROWISP_API_KEY;
const API_URL = process.env.MIKROWISP_API_URL;

async function fetchUserApi(endpoint: string, body: any) {
  const url = `${API_URL}${endpoint}`;

  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      token: API_KEY,
      ...body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getClientsDetails(ci: string) {
  return fetchUserApi("/api/v1/GetClientsDetails", { cedula: ci });
}

export async function getDebt(ci: string) {
  return fetchUserApi("/facilito/consultadeuda", { cedula: ci });
}

export async function registerPayment(payload: App.RegisterPaymentPayload) {
  return fetchUserApi("/facilito/registrarpago", {
    token: API_KEY,
    ...payload,
  });
}
