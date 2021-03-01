import { RouterModule, Routes } from '@angular/router';
import { ContactaComponent } from './contacta/contacta.component';
import { ForoComponent } from './foro/foro.component';

import { HomeComponent } from "./home/home.component";
import { LiveComponent } from './live/live.component';
import { PlaylistComponent } from "./playlist/playlist.component";

const app_routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'foro', component: ForoComponent},
  {path: 'live', component: LiveComponent},
  {path: 'contacta', component: ContactaComponent},
  {path: '**', component: HomeComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);
