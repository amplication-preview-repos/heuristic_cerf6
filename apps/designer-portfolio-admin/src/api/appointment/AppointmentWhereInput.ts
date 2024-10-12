import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CalendarEventWhereUniqueInput } from "../calendarEvent/CalendarEventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AppointmentWhereInput = {
  appointmentDate?: DateTimeNullableFilter;
  calendarEvent?: CalendarEventWhereUniqueInput;
  id?: StringFilter;
};
