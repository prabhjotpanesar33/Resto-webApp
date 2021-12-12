import { Injectable } from '@angular/core';
import { item, category } from 'src/app/models/item';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  private itemsCollection: AngularFirestoreCollection<item>;
  private itemsCollectionGroup: AngularFirestoreCollectionGroup;
  private ordersCollection: AngularFirestoreCollection;
  private itemsDocument: AngularFirestoreDocument<item>
  items: Observable<item[]>;
  products: Observable<item[]>;
  orders: Observable<item[]>;
id : string;
  constructor(private db: AngularFirestore
  ) {    this.itemsCollection = this.db.collection('items', ref => ref.orderBy("name"));
  // this.users = this.usersCollection.valueChanges()
  this.items = this.itemsCollection.snapshotChanges().pipe(map(changes => {
    return changes.map(a => {
      const data = a.payload.doc.data() as item;
      const itemId = data.id
      data.id = a.payload.doc.id;
      return data;
    })
  })
  )

  this.itemsCollectionGroup = db.collectionGroup('products')//,ref => ref.orderBy("name"));
  this.products = this.itemsCollectionGroup.snapshotChanges().pipe(map(changes => {
    return changes.map(b => {
      const data = b.payload.doc.data() as item;
      data.id = b.payload.doc.id;
      return data;
    })
  }))
  this.ordersCollection = this.db.collection('orders', ref => ref.orderBy("name"));
  // this.users = this.usersCollection.valueChanges()
  this.items = this.itemsCollection.snapshotChanges().pipe(map(changes => {
    return changes.map(a => {
      const data = a.payload.doc.data() as item;
      const itemId = data.id
      data.id = a.payload.doc.id;
      return data;
    })
  })
  )
}

getItem() {
  return this.items;
}

getProducts() {
  return this.products;
}

addtocart(item: item ){
  this.db.collection('orders').add(item);
}
}
