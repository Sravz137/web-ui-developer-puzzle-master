import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, finishedDateFromReadingList } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  finishedDateFromReadingList(item) {
    //var selectedItem = { bookId: item.id, finished: true, finishedDate: "2020-01-01T00:00:00.000Z" };
    this.store.dispatch(finishedDateFromReadingList({ item}));
    //this._snackBar.open("Book Removed", "", {
    //  duration: 2000,
    //});
  }
}
