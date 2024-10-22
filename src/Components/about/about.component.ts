import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  text!: string;
  textList: Array<string> = ['lsndkf', 'sndjfm', 'smdjfk','kdjsfn','asdfhj'];
  ngUnsubscribe: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
    // init the first fruit
    this.text = this.textList[0];
    // create an interval that is going to fire every 5s
    interval(15)
      // unsubscribe from interval when the component is destroyed, averting any memory leak
      .pipe(takeUntil(this.ngUnsubscribe))
      // subscribe to interval
      .subscribe(() => {
        // find the current fruit index in the list
        const textIndex = this.textList.findIndex((text: string) => text === this.text);
        // get the next fruit from the list
        const nextText = this.textList[textIndex + 1];
        // if next fruit is defined set displayed fruit with it
        // else if next fruit is undefined that means you reached the end of the list so set the displayed fruit with the first list item
        this.text = nextText ? nextText : this.textList[0];
      });
  }



}
