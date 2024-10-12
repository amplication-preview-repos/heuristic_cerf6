import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CalendarEventResolverBase } from "./base/calendarEvent.resolver.base";
import { CalendarEvent } from "./base/CalendarEvent";
import { CalendarEventService } from "./calendarEvent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CalendarEvent)
export class CalendarEventResolver extends CalendarEventResolverBase {
  constructor(
    protected readonly service: CalendarEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
