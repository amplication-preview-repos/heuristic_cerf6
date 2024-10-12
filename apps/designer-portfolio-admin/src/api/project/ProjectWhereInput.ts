import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProjectWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  projectName?: StringNullableFilter;
};
