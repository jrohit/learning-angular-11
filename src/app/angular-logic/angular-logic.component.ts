import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-logic',
  templateUrl: './angular-logic.component.html',
  styleUrls: ['./angular-logic.component.css']
})
export class AngularLogicComponent implements OnInit {

  gender:any = "Male";
  constructor() { }

  ngOnInit(): void {

  }

  selectGender(gender:any){
    this.gender = gender;
  }

}
