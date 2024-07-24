import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { environment } from './enviroments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    SharedModule,
    MoviesModule,
    AuthModule,
    RouterModule,
    FormsModule,
  
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
