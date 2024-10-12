import { CalendarEventWhereUniqueInput } from "./CalendarEventWhereUniqueInput";
import { CalendarEventUpdateInput } from "./CalendarEventUpdateInput";

export type UpdateCalendarEventArgs = {
  where: CalendarEventWhereUniqueInput;
  data: CalendarEventUpdateInput;
};
