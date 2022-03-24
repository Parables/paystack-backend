import { Router } from "express";
import {
  chargeRequest,
  generateAccessToken,
  submitOtp,
  verifyReference,
} from "../controllers/payment-controller";

// Payment Routes
/**
 * Refer to the [Paystack API docs](https://paystack.com/docs/payments/payment-channels/#cards) for more info on Card payments
 * Refer to the [Paystack API docs](https://paystack.com/docs/payments/payment-channels/#mobile-money) for more info on Mobile Money payments
 */
export const paymentRoutes = Router()
  // for card payments
  .post("/generate-access-token", generateAccessToken)
  .get("/verify/:reference", verifyReference)
  // for mobile payments
  .post("/charge", chargeRequest)
  .post("/submit-otp", submitOtp);
