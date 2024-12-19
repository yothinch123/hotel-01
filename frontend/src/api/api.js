import axios from 'axios';

const API_URL = 'http://localhost:9000/api';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data
  } catch (error) {
    console.error('Error:', error);
  }
};
