import { Component, OnInit, EventEmitter } from '@angular/core';

import { Service1Service } from 'src/app/services/service1.service';

import { category, item } from 'src/app/models/item';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  orderId : string;
  items: category[];
  products: item[];
  profileUrl: Observable<string>;
  total: number = 0;
  cartProductList = [];
  search;
productAdded = new EventEmitter();



  constructor(
    private activatedRoute: ActivatedRoute,
    private db: Service1Service,

    private storage: AngularFireStorage,
    private firestore: AngularFirestore,
    private _bottomSheet: MatBottomSheet) {
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  ngOnInit(): void {


    this.db.getItem().subscribe(items => {
      console.log(items);
      this.items = items;

    })
    this.db.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    })


}
  addToCart(itemId){
  console.log(itemId);
  this.openBottomSheet();

}


}
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  items: category[];
  products: item[];
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,
    private db: Service1Service) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit(): void {


    this.db.getItem().subscribe(items => {
//    console.log(items);
      this.items = items;

    })
    this.db.getProducts().subscribe(products => {
      //console.log(products);
      this.products = products;
    })

}


}
