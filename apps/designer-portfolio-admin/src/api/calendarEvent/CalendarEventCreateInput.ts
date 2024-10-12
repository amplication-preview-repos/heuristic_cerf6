import { AppointmentCreateNestedManyWithoutCalendarEventsInput } from "./AppointmentCreateNestedManyWithoutCalendarEventsInput";

export type CalendarEventCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutCalendarEventsInput;
  eventDate?: Date | null;
  eventName?: string | null;
};
