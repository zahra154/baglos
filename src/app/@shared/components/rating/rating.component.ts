import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation:ViewEncapsulation.Emulated,
})
export class RatingComponent implements OnInit {
  private readonly MAX_NUMBER_OF_STARS = 5;
  @Input()  rating ;
  constructor() { }

  ngOnInit(): void {
    console.log(this.rating)
    console.log(Math.floor(this.rating))

  }
  private get numberOfFullStars(): number {
   // return Math.floor(this.rating);
    return Math.floor(this.MAX_NUMBER_OF_STARS);
  }

  private get numberOfEmptyStars(): number {
    console.log('Math.ceil(this.rating)' , (this.rating) )
    return this.MAX_NUMBER_OF_STARS - Math.ceil(this.rating);
  }

  get fullStars(): any[] {
    return Array(this.numberOfFullStars);
  }

  get emptyStars(): any[] {
    return Array(this.numberOfEmptyStars);
  }

  get hasAnHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }
}
