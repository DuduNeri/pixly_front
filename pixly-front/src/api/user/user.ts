import { api } from "../connection";

interface User {
  id: string;
  name: string;
}

export async function getUserById(userId: string): Promise<User> {
  const response = await api.get<User>(`/api/user/${userId}`);
  return response.data;
}
