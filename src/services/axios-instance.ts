import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const paystackAxiosClient = axios.create({
  baseURL: "https://api.paystack.co/",
  headers: {
    Authorization: `Bearer ${
      process.env.IS_PAYSTACK_LIVE === "true"
        ? process.env.PAYSTACK_SECRET_LIVE_KEY
        : process.env.PAYSTACK_SECRET_TEST_KEY
    }`,
    "Content-Type": "application/json",
  },
});
