import { EventEmitter, Output, Component } from '@angular/core'
import { BookListService, BookItem } from './book-list.services'

@Component({
    selector: 'book-view',
    templateUrl: './book-view.component.html',
    styleUrls: ['./book-view.component.css']
})
export class BookView {
    bookCount: number
    selectedBooks: Array<BookItem>
    constructor (public bookServices: BookListService ) {  }

    bookSelected(event): void {
        console.log("Book selected", event)
        this.bookCount = event
    }
}