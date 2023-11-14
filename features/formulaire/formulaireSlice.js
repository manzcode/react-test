import { createSlice } from "@reduxjs/toolkit";

export const formulaireSlice = createSlice({
  name: "formulaire",
  initialState: {
    nom: "",
    email: "",
    tel: "",
    message: "",
    errors: {
      email: "",
      tel: "",
    },
  },
  reducers: {
    setNom: (state, action) => {
      state.nom = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setTel: (state, action) => {
      state.tel = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setValidationError: (state, action) => {
      state.errors[action.payload.field] = action.payload.message;
    },
  },
});

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneNumberRegex = /^(\+33|0)[1-9](\d{2}){4}$/;

export const { setNom, setEmail, setTel, setMessage, setValidationError } =
  formulaireSlice.actions;
export const validateEmail = (email) => {
  if (!emailRegex.test(email)) {
    setValidationError({ field: "email", message: "Invalid email" });
    return false;
  }
  return true;
};

export const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumberRegex.test(phoneNumber)) {
    setValidationError({ field: "tel", message: "Invalid phone number" });
    return false;
  }
  return true;
};
export default formulaireSlice.reducer;
