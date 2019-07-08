import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTabComponent } from './app-tab/app-tab.component';
import { StarListComponent } from './star-list/star-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { StarWarService } from './starwars.sevice';
import { CreateStarComponent } from './create-star/create-star.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const routes = [
  {path: 'characters', component: AppTabComponent},
  {path: 'create-character', component: CreateStarComponent},
  {path: '**', redirectTo: '/characters'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppTabComponent,
    StarListComponent,
    ListItemComponent,
    CreateStarComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StarWarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
