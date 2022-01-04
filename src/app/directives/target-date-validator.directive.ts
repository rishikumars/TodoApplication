import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appTargetDateValidator]',
  providers:[{provide:NG_VALIDATORS,useExisting:TargetDateValidatorDirective,multi:true}]
})
export class TargetDateValidatorDirective implements Validator {

  constructor() { }
validate(control:FormControl){
  if(control.value===null || control.value===undefined || control.value==='')
  return {required:true,errMsg:'Required Field'}
 
  if(new Date(control.value) < new Date())
  return {invalidTargetDate:true,errMsg:'Target Date should not be less than Current Date'};
  return null;
}
}
