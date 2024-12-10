namespace App {
  interface QueryParams {
    body: any;
    set: any;
  }

  //? src/users
  interface RegisterPaymentPayload {
    IDFactura: number;
    valor: number;
    fecha: string;
    secuencial: number;
  }
}
