import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
              provideHttpClient(withInterceptorsFromDi()), 
              provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes, withComponentInputBinding()), 
              provideClientHydration(withEventReplay()), provideAnimationsAsync(),
              importProvidersFrom(FormsModule,InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })),
            ]
};
