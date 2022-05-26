import { Component,  OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.scss'],
})
export class SlideCardComponent implements OnInit {

  @Input() data:any[] =[]

  //  constructor() {}

  // ngOnInit(): void {}
  // card: any[] = [
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'blue',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'black',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'red',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'green',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'blue',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'black',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'red',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'green',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'blue',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'black',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'red',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     color: 'green',
  //   },
  // ];
  // blue = this.card[0].color;
  // black = this.card[1].color;
  // red = this.card[2].color;
  // green =this.card[3].color;
  // className ="blue";
  // className2 ="black";
  // className3 ="red";
  // className4 ="green";
  // [ngClass]="[className, className2, className3, className4]"
  color = 'orange';
  constructor() {}
  ngOnInit(): void {}



  handleChangeHeaderColor(color: string) {
    this.color = color;
  }

  
  // blueColor() {
  //   this.color = 'blue';
  //   console.log('blue');
  // }
  // blackColor() {
  //   this.color = 'black';
  //   console.log('black');
  // }
  // redColor() {
  //   this.color = 'red';
  //   console.log('red');
  // }
  // greenColor() {
  //   this.color = 'green';
  //   console.log('green');
  // }



  // card: any[] = [
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'blue',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'black',
  //   },

  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'red',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'green',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'blue',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'black',
  //   },

  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'red',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'green',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'blue',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'black',
  //   },

  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'red',
  //   },
  //   {
  //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     descrption:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',

  //     color: 'green',
  //   },
  // ];
  // // blue = this.card[0].color;
  // // black = this.card[1].color;
  // // red = this.card[2].color;
  // // green =this.card[3].color;
  // // className ="blue";
  // // className2 ="black";
  // // className3 ="red";
  // // className4 ="green";
  // // [ngClass]="[className, className2, className3, className4]"

  // color = 'orange';

  // constructor() {}

  // ngOnInit(): void {}

  // handleChangeHeaderColor(color: string) {
  //   this.color = color;
  // }

  // blueColor() {
  //   this.color = 'blue';
  //   console.log('blue');
  // }
  // blackColor() {
  //   this.color = 'black';
  //   console.log('black');
  // }
  // redColor() {
  //   this.color = 'red';
  //   console.log('red');
  // }
  // greenColor() {
  //   this.color = 'green';
  //   console.log('green');
  // }
}
