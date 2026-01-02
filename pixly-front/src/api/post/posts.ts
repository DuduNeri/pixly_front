import { api } from "../connection";
import type { Post } from "../types/Post";

export async function getPosts(): Promise<Post[]> {
  try {
    const { data } = await api.get<Post[]>("/api/posts");
    return data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw error;
  }
}
