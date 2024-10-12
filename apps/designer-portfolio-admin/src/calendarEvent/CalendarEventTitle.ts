import { CalendarEvent as TCalendarEvent } from "../api/calendarEvent/CalendarEvent";

export const CALENDAREVENT_TITLE_FIELD = "eventName";

export const CalendarEventTitle = (record: TCalendarEvent): string => {
  return record.eventName?.toString() || String(record.id);
};
