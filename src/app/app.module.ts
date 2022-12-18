import { NgModule } from '@angular/core'
import { BrowserModule, HammerModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { IonicStorageModule } from '@ionic/storage-angular'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, HammerModule ],
  providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
