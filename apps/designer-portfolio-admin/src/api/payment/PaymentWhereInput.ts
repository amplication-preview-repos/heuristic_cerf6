import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  paymentDate?: DateTimeNullableFilter;
};
