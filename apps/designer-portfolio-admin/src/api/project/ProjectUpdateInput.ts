import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ProjectUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  image?: InputJsonValue;
  projectName?: string | null;
};
