import { AxiosResponse } from "axios";
import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { paystackAxiosClient } from "../services/axios-instance";

/**
 * Refer to the [Paystack API docs](https://paystack.com/docs/api/#transaction-initialize) for more info
 */
export const generateAccessToken = async (req: Request, res: Response) => {
  try {
    const { email, amount } = req.body;
    const response = await paystackAxiosClient.post("/transaction/initialize", {
      email,
      amount,
      reference: randomUUID(),
      channels: ["card", "mobile_money"],
    });

    if (response.status === 200) return res.json(response.data);
  } catch (error) {
    console.log("Initialization Error:", error);
    return res.status(400).send("Payment initialization failed");
  }
};

/**
 * Refer to the [Paystack API docs](https://paystack.com/docs/api/#transaction-verify) for more info
 */
export const verifyReference = async (req: Request, res: Response) => {
  try {
    const { reference } = req.params;
    console.log("Reference: ", reference);
    const response = await paystackAxiosClient.get(
      `/transaction/verify/${reference}`
    );

    if (response.status === 200) return res.json(response.data);
  } catch (error) {
    console.log("Verification Error:", error);
    return res.status(400).send("Payment initialization failed");
  }
};

/**
 * Refer to the [Paystack API docs](https://paystack.com/docs/api/#charge-create) for more info
 */
export const chargeRequest = async (req: Request, res: Response) => {
  let response: AxiosResponse;
  try {
    const { email, amount, mobile_money } = req.body;
    response = await paystackAxiosClient.post("/charge", {
      email,
      amount,
      mobile_money,
      reference: randomUUID(),
    });

    if (response.status === 200) return res.json(response.data);
  } catch (error) {
    console.log("Charge Error:", error.response.data);
    console.log("Charge Error Message:", error?.response?.data?.data?.message);
    return res.status(400).send(error?.response?.data?.data?.message);
  }
};

/**
 * Refer to the [Paystack API docs](https://paystack.com/docs/api/#charge-submit-otp) for more info
 */
export const submitOtp = async (req: Request, res: Response) => {
  try {
    const { otp, reference } = req.body;
    const response = await paystackAxiosClient.post("/charge/submit_otp", {
      otp,
      reference,
    });

    if (response.status === 200) return res.json(response.data);
  } catch (error) {
    console.log("Charge Error:", error);
    return res.status(400).send("Charge OTP validation failed");
  }
};
