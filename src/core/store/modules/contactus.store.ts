import { defineStore } from "pinia";
import contactUsService from "../../services/contactUsServices";
// import getBalance from "../../../helpers/getBalance";

// update account balance

const ContactUs = defineStore("contact", {

  actions: {
    async contactUs(): Promise<any> {
      try {
        const response = await contactUsService.contactUs();
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
