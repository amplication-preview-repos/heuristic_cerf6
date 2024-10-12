import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CalendarEventModuleBase } from "./base/calendarEvent.module.base";
import { CalendarEventService } from "./calendarEvent.service";
import { CalendarEventController } from "./calendarEvent.controller";
import { CalendarEventResolver } from "./calendarEvent.resolver";

@Module({
  imports: [CalendarEventModuleBase, forwardRef(() => AuthModule)],
  controllers: [CalendarEventController],
  providers: [CalendarEventService, CalendarEventResolver],
  exports: [CalendarEventService],
})
export class CalendarEventModule {}
