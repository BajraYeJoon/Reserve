import { createInvoice } from "../controllers/controllers";
import { Router } from "express";

const createinvoice: Router = Router();

createinvoice.post("/invoice", createInvoice);

export default createinvoice;
