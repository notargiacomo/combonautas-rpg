import { Component, ContentChild, inject, Input, OnInit, TemplateRef } from "@angular/core";
import { Observable, Subject, tap } from "rxjs";
import { LoadService } from "../../service/loader.service";
import { AsyncPipe, NgIf, NgTemplateOutlet } from "@angular/common";
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from "@angular/router";

@Component({
    standalone: true,
    templateUrl: "./loading-indicator.component.html",
    styleUrls: ["./loading-indicator.component.scss"],
    imports: [MatProgressSpinnerModule, AsyncPipe,  NgTemplateOutlet],
    selector: "loading-indicator",
})
export class LoadingIndicatorComponent implements OnInit {

  @Input()
  detectRouteTransitions = false;

  @ContentChild("loading")
  customLoadingIndicator: TemplateRef<any> | null = null;

  loading: Observable<boolean>;

  constructor(private loadingService: LoadService,private router: Router){
      this.loading = this.loadingService.isLoading;
  }

  ngOnInit(){
    if (this.detectRouteTransitions) {
      this.router.events
        .pipe(
          tap((event) => {
            if (event instanceof RouteConfigLoadStart) {
              this.loadingService.show();
            } else if (event instanceof RouteConfigLoadEnd) {
              this.loadingService.hide();
            }
          })
        )
        .subscribe();
    }
  }    

}