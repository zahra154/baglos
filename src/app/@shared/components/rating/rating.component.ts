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
  }
  private get numberOfFullStars(): number {
    return Math.floor(this.rating);
  }

  private get numberOfEmptyStars(): number {
    return this.MAX_NUMBER_OF_STARS - Math.ceil(this.rating) ;
  }
  get emptyStars(): any[] {
    return Array(this.numberOfEmptyStars);
  }

  get fullStars(): any[] {
    return Array(this.numberOfFullStars);
  }

  getHalfStar(): any{
    return this.rating - Math.floor(this.rating)
 }

  //
  // get hasAnHalfStar(): boolean {
  //   return this.rating % 1 !== 0;
  // }

  getBgImage(){
    const percent = Math.floor(this.getHalfStar() * 100);
    return `linear-gradient(90deg, #ffe700 0%, #ffe700 ${percent}%, white ${100 - percent}%, white 100%)`;

  }

}
