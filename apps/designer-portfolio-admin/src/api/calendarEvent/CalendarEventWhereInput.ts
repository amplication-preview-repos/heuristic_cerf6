import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CalendarEventWhereInput = {
  appointments?: AppointmentListRelationFilter;
  eventDate?: DateTimeNullableFilter;
  eventName?: StringNullableFilter;
  id?: StringFilter;
};
