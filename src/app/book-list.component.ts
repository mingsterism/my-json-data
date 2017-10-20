import { Input, EventEmitter, Output, Component, OnInit } from '@angular/core'
import { BookListService, BookItem } from './book-list.services'

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookList implements OnInit {
    // Is @Output needed for onSelectBook ?
    onSelectBook: EventEmitter<number> = new EventEmitter<number>()
    bookList: Set<number>
    books: BookItem
    count: number

    constructor ( public bookServices: BookListService ) { 
        this.count = 0
        this.bookServices.booksList.subscribe( (data) => {
            this.books = data
        }) 
        this.bookList = new Set()
    }
    
    ngOnInit(): void {
        this.bookServices.loadBooks()
    }

    pressMe(bookIndex):void{
        if (this.bookList.has(bookIndex)) {
            this.bookList.delete(bookIndex)
        } else {
            this.bookList.add(bookIndex)
        }
        this.onSelectBook.emit(this.bookList.size)        
        this.bookServices.selectingBook(bookIndex)
    }
}