import { EnvironmentProviders, ModuleWithProviders, NgModule, Provider, Type } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { AppComponent } from 'src/app/app.component'
import { AppRouting } from 'src/app/app.routing'
import { FloatingButtonComponent } from 'src/app/components/floating-button/floating-button.component'
import { HeaderComponent } from 'src/app/components/header/header.component'

const DECLARATIONS: Array<Type<any> | any[]> = [
  AppComponent,
  FloatingButtonComponent,
  HeaderComponent
]
const IMPORTS: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
  BrowserModule,
  IonicModule.forRoot(),
  AppRouting
]
const PROVIDERS: Array<Provider | EnvironmentProviders> = [
  {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }
]
const BOOSTRAP: Array<Type<any> | any[]> = [ AppComponent ]

@NgModule({
  declarations: [ ...DECLARATIONS ],
  imports: [ ...IMPORTS ],
  providers: [ ...PROVIDERS ],
  bootstrap: [ ...BOOSTRAP ]
})
export class AppModule {
}
