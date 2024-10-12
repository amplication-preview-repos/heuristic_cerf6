import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ProjectCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  image?: InputJsonValue;
  projectName?: string | null;
};
