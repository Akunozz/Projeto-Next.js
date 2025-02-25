import { api } from "./api";

export const getMotoristas = () => api.get("motorista");

export const deleteMotorista = (id: string) => api.delete(`motorista/${id}`);
