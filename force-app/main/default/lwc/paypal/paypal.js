import { LightningElement } from 'lwc';
//import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
//import { loadScript } from '@salesforce/resource/1668107609000/paypaljs';
//import loadScript from "@salesforce/resourceUrl/paypaljs";

export default class Paypal extends LightningElement {
  paypal;

  connectedCallback(){
    loadScript({ "client-id": "test" })
    .then((paypal) => {
        paypal
            .Buttons()
            .render("#paypal-button-container")
            .catch((error) => {
                console.error("failed to render the PayPal Buttons", error);
            });
    })
    .catch((error) => {
        console.error("failed to load the PayPal JS SDK scripta", error);
    });

  }

//   async connectedCallback(){
//     try {
//         console.log("script...loading");
//         this.paypal = await loadScript({ "client-id": "test" });
        
//     } catch (error) {
//         console.error("failed to load the PayPal JS SDK script", error);
//     }
    
//     if (this.paypal) {
//         try {
//             console.log("paypal is working");
//             await this.paypal.Buttons().render("#paypal-button-container");
//         } catch (error) {
//             console.error("failed to render the PayPal Buttons", error);
//         }
//     }

//   }
  


}
