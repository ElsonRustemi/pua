import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-initialdata',
  templateUrl: './initialdata.component.html',
  styleUrls: ['./initialdata.component.css']
})
export class InitialdataComponent implements OnInit {

  intialForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.intialForm = this.fb.group({
      asp: ["Test"],
      nup: ["Test"],
      distrettoSanitarioBase: ["Test"],
      progressivoPratica: ["Test"],
    })

  }

}
