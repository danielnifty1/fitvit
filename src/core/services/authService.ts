import { http } from "../utils/http";
import authHeader from "../utils/auth.header";
import { Axios } from "axios";
import {
  Register,
  Login,
  ForgotPasswordInit,
  ForgotPasswordComplete,
  ChangePassword,
  Bookappointment
} from "../../interfaces/auth.interface";
class AuthService {
  constructor(private readonly request: Axios) {
    console.log(request);
  }

  /**
   * Post -- Register
   * user register data.email,data.firstname.data.lastname,data.phone and data.password
   * @param {*} data
   */
  async register(data: Register): Promise<any> {
    const response = await this.request.post("/auth/sign-up", data, {});
    return response;
  }



/**
   * Post -- BOOK APPOINTMENT
   * user book appointment data.sessionType,data.Duration.data.title,data.date
   * @param {*} data
   */
async bookappointment(data: Bookappointment): Promise<any> {
  const response = await this.request.post("/auth/book-appointment", data, {});
  return response;
}
  /**
   * Post -- Login
   * user login data.email and data.password
   * @param {*} data
   */
  async login(data: Login): Promise<any> {
    const response = await this.request.post("/auth/sign-in", {
      ...data,
    });
    
    return response;
  }
  /**
   * Post -- ForgotPassword
   * @param {*} data
   */
  async forgotPasswordInit(data: ForgotPasswordInit): Promise<any> {
    const response = await this.request.post("/auth/forgot-Password/init", {
      ...data,
    });

    return response;
  }

   /**
   * Post -- Verify email
   * @param {*} data
   */
   async verifyEmail(data: {otp:number}): Promise<any> {
    const response = await this.request.post("/auth/verify-email", {
      ...data,
    });

    return response;
  }
  /**
   * Put -- ForgotPassword
   * @param {*} data
   */
  async changePassword(data: ChangePassword): Promise<any> {
    const response = await this.request.put(
      "/auth/update-password",
      { ...data },
      { headers: authHeader() }
    );

    return response;
  }
  /**
   * Put --Reset Password
   * @param {*} data
   */
  async forgotPasswordComplete(data: ForgotPasswordComplete): Promise<any> {
    const response = await this.request.put(
      `/auth/${data.resetToken}/reset-password`,
      {
        ...data,
      }
    );
    return response;
  }
  /**
   * get -- logout
   * auth:authorization token
   */
  async logout(): Promise<any> {
    const response = await this.request.get("/auth/logout", {
      headers: authHeader(),
    });
    return response;
  }
  /**
   *get --profile
   * auth:authorization token
   */
  async getAuthUser(): Promise<any> {
    const response = await this.request.get("/profile", {
      headers: authHeader(),
    });
    return response;
  }
}

export default new AuthService(http);
