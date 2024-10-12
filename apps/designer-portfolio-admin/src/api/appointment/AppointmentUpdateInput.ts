import { CalendarEventWhereUniqueInput } from "../calendarEvent/CalendarEventWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentDate?: Date | null;
  calendarEvent?: CalendarEventWhereUniqueInput | null;
};
