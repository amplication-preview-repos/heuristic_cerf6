import { CalendarEvent } from "../calendarEvent/CalendarEvent";

export type Appointment = {
  appointmentDate: Date | null;
  calendarEvent?: CalendarEvent | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
