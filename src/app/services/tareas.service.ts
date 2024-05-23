import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Tarea } from '../domain/tarea';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient, private firestore: Firestore) {

   }

     //Firebase:

  addPost(tarea: Tarea){
    addDoc(collection(this.firestore, 'tarea'), Object.assign({}, tarea))
  }

  getPosts(){
    return getDocs(query(collection(this.firestore, 'tareas')))
  }

}
