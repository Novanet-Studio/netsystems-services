import Elysia from "elysia";
import {
  conformationHandler,
  getBanksHandler,
  getOTPHandler,
  paymentHandler,
} from "./bdt.controller";
import { conformationDto, otpDto, paymentDto } from "./bdt.dto";

const btRouter = new Elysia();

btRouter.post("/bancos", getBanksHandler);

btRouter.post("/clave", getOTPHandler, {
  body: otpDto,
});

btRouter.post("/pago", paymentHandler, {
  body: paymentDto,
});

btRouter.post("/conformation", conformationHandler, {
  body: conformationDto,
});

export default btRouter;
