import { Component, OnInit } from '@angular/core'
import { BookListService } from './book-list.services'



@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookList implements OnInit {
    books: any
    count: number
    changedNumber: number

    constructor ( public bookServices: BookListService ) { 
        this.count = 0
        this.bookServices.booksList.subscribe( (data) => {
            this.books = data
        })
        
    }
    
    ngOnInit(): void {
        this.bookServices.loadBooks()
    }

    pressMe():void{
        console.log("IM PRESSED")
    }

    increment(): void {
        this.count = this.count + 1
    }
}