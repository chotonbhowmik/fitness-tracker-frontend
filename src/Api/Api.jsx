import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const client = axios.create({
  baseURL: BASE_URL,
});

export const fetchUser = async () => {
  const response = await client.get(`/alluser`);
  return response.data;
};

export const fetchTrainer = async () => {
  const response = await client.get(`/alltrainer`);
  return response.data;
};
export const addTrainer = async (createTrainer) => {
  const response = await client.post(`/addtrainer`, createTrainer);
  return response.data;
};
export const addNewsletter = async (createNewsletter) => {
  const response = await client.post(`/newsletter`, createNewsletter);
  return response.data;
};


export const fetchNewsletter = async () => {
    const response = await client.get(`/allnewsletter`);
    return response.data;
}
export const fetchPendingTrainer = async () => {
  const response = await client.get(`/alltrainer/pending`);
  return response.data;
};
export const fetchUpdateTrainer = async (trainerId) => {
  const response = await client.patch(
    `/users/alltrainer/${trainerId}`,
    {} 
  );
  return response.data;
};

export const fetchDeleteTrainer = async (trainerId) => {
  const response = await client.patch(`/users/delete/${trainerId}`, {});
  return response.data;
};

export const fetchCompleteTrainer = async() => {
  const response = await client.get(`/alltrainer/complete`);
  return response.data;
} 
export const addClass = async (createClass) => {
  const response = await client.post(`/addclass`, createClass);
  return response.data;
};
export const allClass = async() =>{
  const response = await client.get(`/allclass`);
  return response.data;
}

export const addForumData = async(createForum) =>{
  const response = await client.post("/addforum", createForum);
  return response.data;
} 