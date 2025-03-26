export interface createAccountType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  password: string;
  confirmPassword: string;
}

export interface loginAccountType {
  email: string;
  password: string;
}
