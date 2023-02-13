import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUsers = createAsyncThunk(
  "getUsers", 
  async (token) => {
  try {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(
      `http://localhost:8080/api/users`,
      headers
    );
    return {
        succes: true,
        response: { data: response.data },
    };
  } catch (error) {
    return {
      success: false,
      response: error.response.data.response,
    };
  }
});

const updateLockUser = createAsyncThunk(
  "updateLockUser",
  async (id, token) => {
   const data = {}
    try {
      let url = `http://localhost:8080/api/admin/${id}`;
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.put(url,data, headers);
      return {
        succes: true,
        response: { data: response.data },
      };
    } catch (error) {
      return {
        success: false,
        response: error.response.data.response,
      };
    }
  }
);

const deleteUser = createAsyncThunk(
  "deleteUser", 
  async (id, token) => {
try {
  let url = `http://localhost:8080/api/admin/${id}`;
  let headers = {headers:{Authorization: `Bearer ${token}`,},};
  const response = await axios.delete(url, headers);
  return {
    succes: true,
    response: { data: response.data },
  };
} catch (error) {
  console.log(error);
}
}); 




const adminActions = {
  getUsers,
  updateLockUser,
  deleteUser
};

export default adminActions;
