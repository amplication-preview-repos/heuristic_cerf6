import { CalendarEventWhereInput } from "./CalendarEventWhereInput";
import { CalendarEventOrderByInput } from "./CalendarEventOrderByInput";

export type CalendarEventFindManyArgs = {
  where?: CalendarEventWhereInput;
  orderBy?: Array<CalendarEventOrderByInput>;
  skip?: number;
  take?: number;
};
