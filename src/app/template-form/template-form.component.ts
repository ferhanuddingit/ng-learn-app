import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  // @ViewChild("myForm") myForm: NgForm;

  defaultCourse: string = "Angular";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    //console.log(this.myForm);
    console.log(form);
  }

}
