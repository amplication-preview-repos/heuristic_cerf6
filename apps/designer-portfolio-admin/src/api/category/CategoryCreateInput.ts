import { ProjectCreateNestedManyWithoutCategoriesInput } from "./ProjectCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutCategoriesInput;
};
