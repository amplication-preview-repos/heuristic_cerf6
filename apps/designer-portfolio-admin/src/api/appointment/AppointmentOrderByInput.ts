import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentDate?: SortOrder;
  calendarEventId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
