import { api } from "../connection";

export async function CreatePost(
  title: string,
  contentText: string,
  contentImage?: string
) {
  const response = await api.post("/api/post", {
    title,
    contentText,
    contentImage,
    coments: [],
  });
  return response;
}
