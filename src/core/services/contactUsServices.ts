import { Axios } from "axios";
// import authHeader from "../utils/auth.header";
import { http } from "../utils/http";

class contactUsService {
  constructor(private readonly request: Axios) { }
  /**
     *get-- users
     * auth:authorization token
     *
     */
  async contactUs(data:any): Promise<any> {
    const response = await this.request
      .post(`contactus/`,data, { headers: { 'Content-Type': 'application/json' } })
    return response;
  }

  
}

export default new contactUsService(http);
