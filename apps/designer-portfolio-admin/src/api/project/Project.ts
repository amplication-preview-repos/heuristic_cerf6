import { Category } from "../category/Category";
import { JsonValue } from "type-fest";

export type Project = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  projectName: string | null;
  updatedAt: Date;
};
