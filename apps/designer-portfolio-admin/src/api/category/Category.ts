import { Project } from "../project/Project";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  projects?: Array<Project>;
  updatedAt: Date;
};
