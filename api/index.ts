import Axios from 'axios';

const BASE_API_URL = 'https://gamify-learning.herokuapp.com/api/';

export async function fetchClasses() {
  console.log('I was called');
  const response = await Axios.get(`${BASE_API_URL}/classes`);
  console.log({ response });
  return response.data;
}

export async function fetchAssignments() {
  console.log('I was called');
  const response = await Axios.get(`${BASE_API_URL}/assignments`);
  console.log({ response });
  return response.data;
}

export async function fetchUpcomings() {
  console.log('I was called');
  const response = await Axios.get(`${BASE_API_URL}/upcomings`);
  console.log({ response });
  return response.data;
}
