import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  projectName?: SortOrder;
  updatedAt?: SortOrder;
};
