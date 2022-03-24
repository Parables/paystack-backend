# PAYSTACK BACKEND SERVER

## Getting started

1. Read the [Paystack Docs](https://paystack.com/docs/payments/accept-payments/#charge-api)

2. Install the project dependencies `npm install`

3. Copy and paste the `.env.example` and rename the copy as `.env`

4. Create an account on PayStack and fill teh variables in th `.env` file and don't forget to set your environment variables when you deploy to Heroku or Cyclic

5. By default, the server will be in test mode. To go live, set the `IS_PAYSTACK_LIVE=true` in the `.env` file

6. Refer to [Paystack documentation](https://paystack.com/docs/payments/payment-channels/#mobile-money) if you have any issues

7. Spin up a dev server with `npm run dev` (automatic restart with nodemon) or `npm run start-dev`

8. Deploy to `Heroku` or `Cyclic` and enjoy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Parables/paystack-backend)

[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://github.com/Parables/paystack-backend)
