import { SortOrder } from "../../util/SortOrder";

export type CalendarEventOrderByInput = {
  createdAt?: SortOrder;
  eventDate?: SortOrder;
  eventName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
