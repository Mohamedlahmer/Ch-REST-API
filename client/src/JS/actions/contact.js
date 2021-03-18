import {
  LOAD_CONTACT,
  GET_CONTACTS,
  FAIL_CONTACT,
  GET_CONTACT,
} from "../actionTypes/contacts";
import axios from "axios";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACT });
  try {
    let result = await axios.get("/api/contact");
    dispatch({ type: GET_CONTACTS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/contact/${id}`);
    dispatch({ type: GET_CONTACT, payload: result.data.result });
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};

export const postContact = (newUser) => async (dispatch) => {
  try {
    await axios.post("/api/contact", newUser);
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response.data });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${id}`);
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response.data });
  }
};

export const editContact = (id, newUser) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/${id}`, newUser);
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response.data });
  }
};
