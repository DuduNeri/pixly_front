import { api } from "../connection";

export async function userLogin(email: string, password: string) {
  const response = await api.post("/api/login", { email, password });

  localStorage.setItem("userName", response.data.user.name);
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("userId", response.data.user.id);

  return response;
}
