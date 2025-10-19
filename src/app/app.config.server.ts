import { ApplicationConfig, mergeApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appConfig } from './app.config';

import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
