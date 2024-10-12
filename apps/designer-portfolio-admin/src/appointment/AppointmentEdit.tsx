import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CalendarEventTitle } from "../calendarEvent/CalendarEventTitle";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
