import { CalendarEventWhereUniqueInput } from "../calendarEvent/CalendarEventWhereUniqueInput";

export type AppointmentCreateInput = {
  appointmentDate?: Date | null;
  calendarEvent?: CalendarEventWhereUniqueInput | null;
};
