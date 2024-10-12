import { ProjectUpdateManyWithoutCategoriesInput } from "./ProjectUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  projects?: ProjectUpdateManyWithoutCategoriesInput;
};
