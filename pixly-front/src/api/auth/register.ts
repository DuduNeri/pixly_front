import { api } from "../connection";

export async function userRegiter(name: string, email: string, password: string) {
  try {
    
    const response = await api.post("api/create", {
      name,
      email,
      password,
    });

    console.log(response)

    return response;
  } catch (error) {
    console.log(error);
  }
}
