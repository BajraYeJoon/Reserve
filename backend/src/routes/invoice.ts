import { createInvoice } from "../controllers/invoice.controller";
import { Router } from "express";

const createinvoice: Router = Router();

//Route for creating the invoice

createinvoice.post("/invoice", createInvoice);

export default createinvoice;
