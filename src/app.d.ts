declare namespace App {
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

  //? src/bdt
  interface MakePaymentPayload {
    celular: string;
    banco: string;
    cedula: string;
    monto: string;
    token: string;
    nombre: string;
  }

  interface MakeConfirmationPayload {
    referencia: string;
    monto: string;
    banco: string;
    fecha: string;
    celular: string;
  }
}
