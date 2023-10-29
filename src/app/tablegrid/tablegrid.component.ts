import { Component } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-tablegrid',
  templateUrl: './tablegrid.component.html',
  styleUrls: ['./tablegrid.component.scss']
})
export class TablegridComponent {

tableForm!: FormGroup;


 constructor(
private formBuilder :FormBuilder
 ) {
  this.tableForm = new FormGroup({

  });
}
}