import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/in-memory-data.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEnvironmentNgxLoaderIndicator} from 'ngx-loader-indicator'
import { LoaderInterceptor } from './conf/core/loader-interceptor';

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
