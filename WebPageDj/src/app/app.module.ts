import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { app_routing } from "./app.routes";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { HomeComponent } from './home/home.component';
import { ForoComponent } from './foro/foro.component';
import { LiveComponent } from './live/live.component';
import { ContactaComponent } from './contacta/contacta.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaylistComponent,
    HomeComponent,
    ForoComponent,
    LiveComponent,
    ContactaComponent,
    FooterComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
