import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { productReducer } from './ecommerce/product/state/product.reducer';
import { ProductEffects } from './ecommerce/product/state/product.effects';
import { provideStoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()), // Enable fetch API
    provideStore(), provideEffects(),
    // StoreModule.forRoot({ products: productReducer }),
    // EffectsModule.forRoot([ProductEffects])
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
