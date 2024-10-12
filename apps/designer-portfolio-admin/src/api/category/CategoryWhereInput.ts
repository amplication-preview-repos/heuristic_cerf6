import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
};
