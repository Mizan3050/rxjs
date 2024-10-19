import { Component, OnInit } from '@angular/core';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [ChildTwoComponent],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss'
})
export class ChildOneComponent implements OnInit{

  constructor(){
    console.log('child one')
  }

  ngOnInit(): void {
    console.log('child one ng oninit')
  }

}
