import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withComponentInputBinding, withEnabledBlockingInitialNavigation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation()
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ]
};
