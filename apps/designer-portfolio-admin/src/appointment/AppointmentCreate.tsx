import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CalendarEventTitle } from "../calendarEvent/CalendarEventTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="appointmentDate" source="appointmentDate" />
        <ReferenceInput
          source="calendarEvent.id"
          reference="CalendarEvent"
          label="CalendarEvent"
        >
          <SelectInput optionText={CalendarEventTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
