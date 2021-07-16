import React, { useState } from "react";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import Button from "components/button/Button";
import Embed from "react-runkit";
import "pages/gladePay/GladePay.css";

export default function SectionEmbededAPI() {
  const [state, setstate] = useState(0);

  return (
    <section className="py-20 px-4">
      <div className="flex justify-center">
        <div className="container">
          <div className="text-center flex justify-center">
            <div>
              <SectionInfoTitle header style={{ margin: "0 auto" }}>
                Build amazing products with our API
              </SectionInfoTitle>
              <div className="flex justify-center">
                  <SectionInfoDescription className="max-w-sm">
                Made for developers and innovators like you to build amazing
                products.
              </SectionInfoDescription>
              </div>
              
              <Button bgColor="bg-secondary">Open API docs</Button>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div class=" max-w-3xl w-full">
              <div className="flex md:flex-row flex-col">
                <div className="api-demo-header flex-0 p-4">
                  <ul>
                    <li>
                      <button
                        className={`${state === 0 ? "active" : ""}`}
                        onClick={() => setstate(0)}
                      >
                        Funds Transfer API
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${state === 1 ? "active" : ""}`}
                        onClick={() => setstate(1)}
                      >
                        Account Creation API
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${state === 2 ? "active" : ""}`}
                        onClick={() => setstate(2)}
                      >
                        Payments API
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${state === 3 ? "active" : ""}`}
                        onClick={() => setstate(3)}
                      >
                        Verification API
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${state === 4 ? "active" : ""}`}
                        onClick={() => setstate(4)}
                      >
                        Issuing API
                      </button>
                    </li>
                    <li>
                      <a
                        href="https://developer.glade.ng/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button>Digital Services API</button>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="flex-1 p-4">
                  <div>
                    <Embed
                      source={
                        state === 0
                          ? fundTransfer
                          : state === 1
                          ? fundTransfer
                          : state === 2
                          ? paymentApi
                          : state === 3
                          ? paymentApi
                          : state === 4
                          ? issuingApi
                          : fundTransfer
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const fundTransfer = `// Require the library
const glade = require('glade-node@0.1.11')('GP0000001','123456789');

// Money Transfer to a test bank.
glade.disburse.transfer({
 action: "transfer",
  amount: "10",
  bankcode:"044", 
  accountnumber:"0690000005",
  sender_name: "John Doe",
  orderRef: "Test",
  narration: "This is a demo transfer test"
})
.then(function(body) {
console.log(body.message);
})
.catch(function(error) {
console.log(error);
});`;

const paymentApi = `// Require the library
const glade = require('glade-node@0.1.11')('GP0000001', '123456789');

// Create a card payment from a test card.
glade.payment.cardPayment({
    action: "charge",
    paymentType: "card",
    user: {
        firstname: "John",
        lastname: "Doe",
        email: "text@example.com",
        ip: "198.168.33.10",
        fingerprint: "cccvxbxbxb"
    },
    card: {
        card_no: "5438898014560229",
        expiry_month: "09",
        expiry_year: "19",
        ccv: "789",
        pin: "3310"
    },
    amount: "10000",
    country: "NG",
    currency: "NGN",
    auth_type: "PIN"

})
    .then(function(body) {
        glade.payment.validateOtp({
            action: "validate",
            txnRef: body.txnRef,
            otp: "123456"
        }).then(function(body) {
            console.log(body.message);
        }).
        catch (function(error) {
            console.log(error);
        });

    })
    .
catch (function(error) {
    console.log(error);
});`;

const issuingApi = `// Require the library
const glade = require('glade-node@0.1.11')('GP0000001', '123456789');

// Create a card payment from a test card.
glade.payment.cardPayment({
    action: "charge",
    paymentType: "card",
    user: {
        firstname: "John",
        lastname: "Doe",
        email: "text@example.com",
        ip: "198.168.33.10",
        fingerprint: "cccvxbxbxb"
    },
    card: {
        card_no: "5438898014560229",
        expiry_month: "09",
        expiry_year: "19",
        ccv: "789",
        pin: "3310"
    },
    amount: "10000",
    country: "NG",
    currency: "NGN",
    auth_type: "PIN"

})
    .then(function(body) {
        glade.payment.validateOtp({
            action: "validate",
            txnRef: body.txnRef,
            otp: "123456"
        }).then(function(body) {
            console.log(body.message);
        }).
        catch (function(error) {
            console.log(error);
        });

    })
    .
catch (function(error) {
    console.log(error);
});`;
