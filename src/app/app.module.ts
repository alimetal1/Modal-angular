import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalDialogComponent } from './modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';


const routes: Routes = [
  { path: 'modal', component: ModalDialogComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
