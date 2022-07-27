import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
const smallDeviceAverageSize = 1800;

@Injectable()
export class UtilityService {

  constructor() { }

  isLocalStorageNameSupported(): Boolean {
    const testKey = 'test', storage = window.localStorage;
    try {
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  isSmallDevice(): boolean {
    const w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      width = w.innerWidth || e.clientWidth || g.clientWidth,
      height = w.innerHeight || e.clientHeight || g.clientHeight;

    return width + height < smallDeviceAverageSize;
  }

  mustMatchFormValidator(controlName: string, matchingControlName: string) {
    return (formGroup: UntypedFormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
