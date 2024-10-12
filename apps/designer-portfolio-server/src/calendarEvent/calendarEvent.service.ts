import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CalendarEventServiceBase } from "./base/calendarEvent.service.base";

@Injectable()
export class CalendarEventService extends CalendarEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
