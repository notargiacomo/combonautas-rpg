import { Spec } from "./spec";
import { TreasureContext } from "../model/treasure";

export class IsHighLevelSpec implements Spec<TreasureContext> {
  constructor(private min = 10) {}
    and(other: Spec<TreasureContext>): Spec<TreasureContext> {
        throw new Error("Method not implemented.");
    }
    or(other: Spec<TreasureContext>): Spec<TreasureContext> {
        throw new Error("Method not implemented.");
    }
    not(): Spec<TreasureContext> {
        throw new Error("Method not implemented.");
    }
  isSatisfiedBy(c: TreasureContext) { 
    return c.level >= this.min; 
  }
}