import axios from 'axios';
import { UserDataType } from '../../types/types';

export const registration = async (userData: UserDataType) => {
  const { email, password, firstName, lastName, fatherName, phone } = userData;
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_API_URL}/registration`, {
      email,
      password,
      firstName,
      lastName,
      fatherName,
      phone,
    });
    console.log(response.data);
  } catch (e:any) {
    console.log(e.response.data.message);
  }
};

export const login = async (email:string, password:string) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_API_URL}/login`, {
      email,
      password,
    });
    console.log(response.data);
  } catch (e:any) {
    console.log(e.response.data.message);
  }
};
