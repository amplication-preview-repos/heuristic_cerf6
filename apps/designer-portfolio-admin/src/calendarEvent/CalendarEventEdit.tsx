import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const CalendarEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="appointments" reference="Appointment">
          <SelectArrayInput
            optionText={AppointmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="eventDate" source="eventDate" />
        <TextInput label="eventName" source="eventName" />
      </SimpleForm>
    </Edit>
  );
};
