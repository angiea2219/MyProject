import axios from "./axios";

export const getAllProjectsRequest = () => axios.get("/projects");

export const createProjectRequest = (project) => axios.post("/projects", project);

export const deleteProjectRequest = (id) => axios.delete(`/projects/${id}`);

export const getProjectRequest = (id) => axios.get(`/projects/${id}`);

export const updateProjectRequest = (id, project) => axios.put(`/projects/${id}`, project);
