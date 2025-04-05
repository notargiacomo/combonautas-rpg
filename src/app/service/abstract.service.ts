import { Injectable } from "@angular/core";

const baseUrl = 'api/';

export class AbstractService {

    url!: string

    constructor(endPoint: string = ''){
      this.url = baseUrl +  endPoint;
    }

    removeBlankAttributes(obj:any) {
        const result:any = {};
        for (const key in obj) {
            if (obj[key] !== null && obj[key] !== undefined) {
                result[key] = !isNaN(Number(obj[key]))? Number(obj[key]): obj[key];
            }
        }
        return result;
      }
}