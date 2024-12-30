import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoadService {

    public isLoading = new BehaviorSubject<boolean>(false);


//     private loadingSubject = new BehaviorSubject<boolean>(false);

//   loading$ = this.loadingSubject.asObservable();

    show() {
        this.isLoading.next(true)
    }

    hide() {
        this.isLoading.next(false)
    }

}