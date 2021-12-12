import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms'
import { Service1Service} from 'src/app/services/service1.service'
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderstatusComponent } from './orderstatus/orderstatus.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderstatusComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NoopAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatBottomSheetModule,
    MatButtonModule,
    Ng2SearchPipeModule

  ],
  providers: [ Service1Service ],
  bootstrap: [AppComponent]

})
export class AppModule { }
