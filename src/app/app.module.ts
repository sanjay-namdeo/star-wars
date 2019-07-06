import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTabComponent } from './app-tab/app-tab.component';
import { StarListComponent } from './star-list/star-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { StarWarService } from './starwars.sevice';

@NgModule({
  declarations: [
    AppComponent,
    AppTabComponent,
    StarListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StarWarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
