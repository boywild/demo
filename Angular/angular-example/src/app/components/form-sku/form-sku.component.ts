import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidSku: true }
  }
}

@Component({
  selector: 'app-form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  inputSku: string;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required,
        skuValidator
      ])]
    });

    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe((value: string) => {
      console.log(value);
    })
    this.myForm.valueChanges.subscribe((value: object) => {
      console.log(value);
    })
  }

  ngOnInit() {
  }
  onSubmit(value: any): void {
    console.log(value);
  }
  onSubmitBuilder(value: object): void {
    console.log(this.sku.valid);
  }

}
