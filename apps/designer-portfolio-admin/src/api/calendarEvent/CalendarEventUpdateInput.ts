import { AppointmentUpdateManyWithoutCalendarEventsInput } from "./AppointmentUpdateManyWithoutCalendarEventsInput";

export type CalendarEventUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutCalendarEventsInput;
  eventDate?: Date | null;
  eventName?: string | null;
};
