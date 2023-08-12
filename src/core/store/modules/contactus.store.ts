import { defineStore } from "pinia";
import contactUsService from "../../services/contactUsServices";
// import getBalance from "../../../helpers/getBalance";

// update account balance
import {

  ContactUsInterface
   
} from "../../../interfaces/auth.interface";
const ContactUs = defineStore("contact", {

  actions: {
    async contactUs(data:ContactUsInterface): Promise<any> {
      try {
        const response = await contactUsService.contactUs(data);
        if (response.data) {
          return await Promise.resolve(response);
        } else if (response.response) {
          return await Promise.reject(response.response);
        } else {
          return await Promise.reject(response.message);
        }
      } catch (error: any) {
        return await Promise.reject(error);
      }
    },

  
  },
});
export default ContactUs;
