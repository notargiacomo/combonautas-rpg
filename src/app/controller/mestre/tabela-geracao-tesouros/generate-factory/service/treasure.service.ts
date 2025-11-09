import { Injectable } from "@angular/core";
import { TreasureContext } from "../model/treasure";
import { TreasureRegistry } from "../core/treasure-registry.service";

// usage in a service
@Injectable({ providedIn: 'root' })
export class TreasureService {
  constructor(private registry: TreasureRegistry) {}

  generate(ctx: TreasureContext) {
    const gen = this.registry.getGenerator(ctx.type);
    if (!gen) throw new Error(`No generator for ${ctx.type}`);
    return gen.generate(ctx);
  }
}