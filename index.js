import express from 'express'
import axios from 'axios'
const app = express()

app.post('/sample',async(req,res,next) => {
    const options = {
        method: 'POST',
        url: 'https://api.paymongo.com/v1/checkout_sessions',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: 'Basic c2tfdGVzdF9acGg1TDV2TWZRSGVIMnhZWmFKcE5Ldzg6'
        },
        data: {
          data: {
            attributes: {
              send_email_receipt: false,
              show_description: true,
              show_line_items: true,
              line_items: [{currency: 'PHP', amount: 5000, name: 'sample', quantity: 1}],
              payment_method_types: ['paymaya'],
              description: 'samsan'
            }
          }
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
            res.json(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
})

app.listen(5000, () => {
    console.log('Server is running at port 5000.')
})
