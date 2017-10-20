import { EventEmitter, Output, Component, OnInit } from '@angular/core'

@Component({
    selector: 'book-view',
    templateUrl: './book-view.component.html',
    styleUrls: ['./book-view.component.css']
})
export class BookView implements OnInit {
    bookCount: number
    constructor ( ) {  }

    ngOnInit() { }
    
    bookSelected(event): void {
        console.log("Book selected", event)
        this.bookCount = event
    }
}