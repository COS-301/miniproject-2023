import { Injectable } from "@angular/core";
import { Firestore } from "firebase-admin/firestore";
import { Functions, httpsCallable } from '@angular/fire/functions';

@Injectable()
export class ProfileViewApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}
}