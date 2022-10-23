export interface Post {
  id: string;
  title: string;
  content: string;
  state: "published" | "archived" | "draft";
  createdBy: User;
  updatedBy: User | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  surname: string;
  createdBy: string | null;
  updatedBy: string | null;
  createdAt: Date;
  updatedAt: Date;
}
