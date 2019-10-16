import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-announce-freight',
  templateUrl: './announce-freight.component.html',
  styleUrls: ['./announce-freight.component.scss']
})
export class AnnounceFreightComponent implements OnInit {
  announceForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.announceForm = this.formBuilder.group({
    });
  }
  onSubmit(){
    
  }

}
