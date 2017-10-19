import { Injectable, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http'

export interface BookItem {
    author: string; 
    title: string;
    datePublished: number
}


const MOCKBOOKS = [
    { "author": "James0", "title": "A funny Book0", "datePublished": "Thu Dec 01 2010 00:00:00 GMT+0800 (MYT)"},
    { "author": "James1", "title": "A funny Book1", "datePublished": "Thu Dec 02 2010 00:00:00 GMT+0800 (MYT)"},
    { "author": "James2", "title": "A funny Book2", "datePublished": "Thu Dec 03 2010 00:00:00 GMT+0800 (MYT)"},
    { "author": "James3", "title": "A funny Book3", "datePublished": "Thu Dec 04 2010 00:00:00 GMT+0800 (MYT)"},
    { "author": "James4", "title": "A funny Book4", "datePublished": "Thu Dec 05 2010 00:00:00 GMT+0800 (MYT)"},
    { "author": "James5", "title": "A funny Book5", "datePublished": "Thu Dec 06 2010 00:00:00 GMT+0800 (MYT)"},
    { "author": "James6", "title": "A funny Book6", "datePublished": "Thu Dec 07 2010 00:00:00 GMT+0800 (MYT)"},
    { "author": "James7", "title": "A funny Book7", "datePublished": "Thu Dec 08 2010 00:00:00 GMT+0800 (MYT)"},
    { "author": "James8", "title": "A funny Book8", "datePublished": "Thu Dec 09 2010 00:00:00 GMT+0800 (MYT)"},
    { "author": "James9", "title": "A funny Book9", "datePublished": "Thu Dec 10 2010 00:00:00 GMT+0800 (MYT)"}
]


@Injectable()
export class BookListService {
    public booksList:EventEmitter<object> = new EventEmitter() 

    constructor(public http:HttpClient) {  }

    getBooksMockDelay() : Promise<object> {
        return new Promise( (resolve) => {
            setTimeout( () => resolve(MOCKBOOKS) , 4000)
        })
        // Unable to subscribe to json data. unable to call localhost:4200/api/books.json
        // this.http.get('./app/books.json').subscribe( (data) => 
        // this.booksList = data['results']
        // )}
    }
    loadBooks(): void {
        this.getBooksMockDelay().then( (data) => this.booksList.emit(data))
    }
}