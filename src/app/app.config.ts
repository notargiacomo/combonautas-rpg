import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { provideEnvironmentNgxLoaderIndicator } from 'ngx-loader-indicator';
import { routes } from './app.routes';
import { LoaderInterceptor } from './conf/core/loader-interceptor';
import { InMemoryDataService } from './data/in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
              provideHttpClient(withFetch()), 
              provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes, withComponentInputBinding()), 
              provideClientHydration(withEventReplay()), provideAnimationsAsync(),
              importProvidersFrom(FormsModule,InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true,
                dataEncapsulation: false, delay: 1000 })),
                provideAnimations(),
                provideEnvironmentNgxLoaderIndicator(),
                { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
            ]
};
