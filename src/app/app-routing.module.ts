import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YardComponent } from './yard/yard.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: '', component: YardComponent },
  { path: 'rooms', component: RoomsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
