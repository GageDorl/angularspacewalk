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

  text: string ='';
  textList: Array<string> = ['Rsndkf', 'Rsdjfm', 'Rmdjfk','Rdjsfn','Rsdfhj'];
  text1: string = '';
  textList1: Array<string> = ['against me', 'adainst we', 'ggainst ma', 'againsf me']


  ngUnsubscribe: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
    this.text = this.textList[0];
    this.text1 = this.textList1[0];
    interval(15)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        const textIndex = this.textList.findIndex((text: string) => text === this.text);
        const textIndex1 = this.textList1.findIndex((text1: string) => text1 === this.text1);
        const nextText = this.textList[textIndex + 1];
        
        const nextText1 = this.textList1[textIndex1 + 1];
        this.text = nextText ? nextText : this.textList[0];
        this.text1 = nextText1 ? nextText1 : this.textList1[0];
      });
  }



}
