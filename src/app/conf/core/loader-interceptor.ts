import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadService } from "../../service/loader.service";
import { finalize, Observable } from "rxjs";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loadService: LoadService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadService.show()
    return next.handle(req).pipe(finalize(()=>this.loadService.hide()));
  }
}