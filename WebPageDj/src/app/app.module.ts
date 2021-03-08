import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { app_routing } from "./app.routes";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { HomeComponent } from './home/home.component';
import { ForoComponent } from './foro/foro.component';
import { LiveComponent } from './live/live.component';
import { ContactaComponent } from './contacta/contacta.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { RegistersComponent } from './registers/registers.component';
import { LoginComponent } from './login/login.component';
import { UploadsComponent } from './uploads/uploads.component';
import { ForgotsComponent } from './forgots/forgots.component';
import { YoutubePipe } from './youtube.pipe';
import { TracksPipe } from './tracks.pipe';

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
    FormComponent,
    RegistersComponent,
    LoginComponent,
    UploadsComponent,
    ForgotsComponent,
    YoutubePipe,
    TracksPipe
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
