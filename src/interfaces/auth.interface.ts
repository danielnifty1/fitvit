export interface Register {
    first_name: string;
    last_name: string;
    goals: string;
    coached: boolean;
    dob: string;
    linked: string;
    instagram: string;
    password: string;
    email: string;
  }

  export interface Bookappointment {
    session_type: string;
    duration: number;
    title: string;
    appointment_time: string;
  }

  export interface PayForappointment {
    session_type: string;
    duration: number;
    title: string;
    appointment_time: [];
    total_duration:number;
    total_amount:number;

  }
  export interface Login {
    email: string;
    password: string;
  }
  export interface ForgotPasswordInit {
    email: string;
  }
  export interface ForgotPasswordComplete {
    confirm_password: string;
    new_password: string;
    resetToken: string;
  }
  export interface ChangePassword {
    old_password: string;
    new_password: string;
  }
  