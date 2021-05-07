import Axios from 'axios';

export async function fetchClasses() {
  console.log('I was called');
  const response = await Axios.get('https://gamify-learning.herokuapp.com/api/classes');
  console.log({ response });
  return response.data;
}

export async function fetchAssignments() {
  console.log('I was called');
  const response = await Axios.get('https://gamify-learning.herokuapp.com/api/assignments');
  console.log({ response });
  return response.data;
}

export async function fetchUpcomings() {
  console.log('I was called');
  const response = await Axios.get('https://gamify-learning.herokuapp.com/api/upcomings');
  console.log({ response });
  return response.data;
}
