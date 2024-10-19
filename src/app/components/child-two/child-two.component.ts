import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.scss'
})
export class ChildTwoComponent implements OnInit{

  constructor(){
    console.log('child two')
  }

  ngOnInit(): void {
    console.log('child one ng oninit')
  }
}
