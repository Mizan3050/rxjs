import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildOneComponent } from './components/child-one/child-one.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildOneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'root parent';

  constructor(){
    console.log(this.title);
  }

  ngOnInit(): void {
    console.log('Parent ng oninit')
  }
}
