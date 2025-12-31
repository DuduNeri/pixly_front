export interface Post {
  id: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  user: string; 
}

export interface User {
  name: string;
  username: string;
  avatar: string;
}