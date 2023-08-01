import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Firestore, addDoc, collectionSnapshots, deleteDoc, query, collection, where, getDocs, updateDoc } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  addCart() {
    throw new Error('Method not implemented.');
  }
 listItem: Item[]= [
 ]

 itemsCollection = collection(this.firestore, 'items');
 constructor (private firestore: Firestore) {
 this.getData();
 this.deleteItem('1690875322108');
// this.updateItem({description: "nice", id:"1690785668603", img: "", name: "blablalba", price: 200000, quantity:1});
 }

 getData(){
    collectionSnapshots(this.itemsCollection).subscribe((snapshot) => {
      let result = snapshot.map((doc) =>  doc.data());
      this.listItem = result as Item[];
      console.log(this.listItem);
    });
 }
  async addItem(Item: Item){
    let timestamp = Date.now().toString();
    Item = {
      ...Item,
      id: timestamp,

    };
    this.listItem.push(Item);
    let result = addDoc(this.itemsCollection, Item);
  }
  async deleteItem(id: string){
    let q = query(this.itemsCollection, where('id', '==', id));
    let docSnap = await getDocs(q);
    await deleteDoc(docSnap.docs[0].ref);
  }

  async updateItem(Item: Item){
    let q = query(this.itemsCollection, where('id', '==', Item.id));
    let docSnap = await getDocs(q);
    await updateDoc(docSnap.docs[0].ref, {...Item});
  }
}