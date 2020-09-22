import { environment } from './../environments/environment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux';
import { ProductsEffects } from './redux/products/products.effects';
import { RouterEffects } from './redux/router/router.effects';
import { RegistrazioneComponent } from './features/registrazione/registrazione.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './features/products/components/main/products.component';
import { CartEffects } from './redux/cart/cart.effects';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductsEffects, RouterEffects, CartEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
