import { GeneratedTreasure, TreasureContext } from "../model/treasure";

export interface TreasureGenerator {
  generate(input: TreasureContext): GeneratedTreasure;
}