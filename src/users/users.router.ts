import { Elysia } from "elysia";
import {
  getClientsDetailsHandler,
  getDebtHandler,
  registerPaymentHandler,
} from "./users.controller";
import {
  getClientsDetailsDto,
  getDebtDto,
  registerPaymentDto,
} from "./users.dto";

const usersRouter = new Elysia();

usersRouter.post("/getClientDetails", getClientsDetailsHandler, {
  body: getClientsDetailsDto,
});

usersRouter.post("/getDebt", getDebtHandler, {
  body: getDebtDto,
});

usersRouter.post("/setPayment", registerPaymentHandler, {
  body: registerPaymentDto,
});

export default usersRouter;
