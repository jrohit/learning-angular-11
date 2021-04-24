import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  preserveWhitespaces: true
})
export class HeaderComponent implements OnInit {
  date:any;  
  constructor() { 
    this.date = new Date();
  }

  ngOnInit(): void {
  }

}
