import { Appointment } from "../appointment/Appointment";

export type CalendarEvent = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  eventDate: Date | null;
  eventName: string | null;
  id: string;
  updatedAt: Date;
};
