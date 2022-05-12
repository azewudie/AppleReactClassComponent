import { Component,  OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.scss'],
})
export class SlideCardComponent implements OnInit {

  @Input() data:any[] =[]

  color = 'orange';
  constructor() {}
  ngOnInit(): void {}
  handleChangeHeaderColor(color: string) {
    this.color = color;
  } 
}
