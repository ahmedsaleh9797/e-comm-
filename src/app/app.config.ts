import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, inject, provideAppInitializer, provideEnvironmentInitializer } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { setHeaderInterceptor } from '@core/interceptores/setHeader/set-header-interceptor';
import { provideAngularSvgIcon } from 'angular-svg-icon';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { errorInterceptor } from './core/interceptores/error-interceptor';
import { MyTranslateService } from './core/services/myTranslate/my-translate.service';

export const appConfig: ApplicationConfig = {

  providers: [
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withComponentInputBinding(),
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([setHeaderInterceptor, errorInterceptor])),

    provideAppInitializer(() => inject(MyTranslateService).initialize()),

    provideEnvironmentInitializer(() => { }),

    provideTranslateService({
      defaultLanguage: 'en'
    }),
    provideTranslateHttpLoader({
      prefix: '/i18n/',
      suffix: '.json'
    }),

    provideAngularSvgIcon()

  ]
};
