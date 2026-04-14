import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MyTranslateService {

  private translateService = inject(TranslateService);
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  initialize() {
  let lang = 'en';

  if (isPlatformBrowser(this.platformId)) {
    lang = localStorage.getItem('lang') || 'en';
  }

  this.translateService.setFallbackLang('en');

  return this.loadTranslation(lang).pipe(
    take(1), // ✅ أهم سطر
    tap(() => {
      this.translateService.use(lang);

      if (isPlatformBrowser(this.platformId)) {
        document.dir = lang === 'ar' ? 'rtl' : 'ltr';
      }
    })
  );
}

  loadTranslation(lang: string) {
    return this.http.get(`/assets/i18n/${lang}.json`).pipe(
      tap((res: any) => {
        this.translateService.setTranslation(lang, res);
      })
    );
  }
}