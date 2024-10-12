import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CALENDAREVENT_TITLE_FIELD } from "./CalendarEventTitle";

export const CalendarEventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventDate" source="eventDate" />
        <TextField label="eventName" source="eventName" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Appointment"
          target="calendarEventId"
          label="Appointments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="appointmentDate" source="appointmentDate" />
            <ReferenceField
              label="CalendarEvent"
              source="calendarevent.id"
              reference="CalendarEvent"
            >
              <TextField source={CALENDAREVENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
