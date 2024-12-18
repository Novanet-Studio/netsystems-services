import Elysia from "elysia";
import {
  conformationHandler,
  getBanksHandler,
  getOTPHandler,
  paymentHandler,
} from "./bdt.controller";
import { conformationDto, otpDto, paymentDto } from "./bdt.dto";

const btRouter = new Elysia();

btRouter.post("/getBanks", getBanksHandler);

btRouter.post("/getOTP", getOTPHandler, {
  body: otpDto,
});

btRouter.post("/setPayment", paymentHandler, {
  body: paymentDto,
});

btRouter.post("/conformation", conformationHandler, {
  body: conformationDto,
});

export default btRouter;
