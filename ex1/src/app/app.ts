import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  pwdLen = 0;
  useLetter = false;
  useSymbol = false;
  useNumber = false;
  result: string = '';

  onChangePwdLen(value: string) {
    const numberValue = parseInt(value);

    if (!isNaN(numberValue)) {
      this.pwdLen = numberValue;
    }
  }

  setUseLetter(value: boolean) {
    this.useLetter = Boolean(value);
  }

  setUseNumber(value: boolean) {
    this.useNumber = Boolean(value);
  }

  setUseSymbol(value: boolean) {
    this.useSymbol = Boolean(value);
  }

  setDisabled() {
    return !this.useLetter && !this.useNumber && !this.useSymbol;
  }

  onClick() {
    console.log(this.pwdLen);
    console.log(this.useLetter);
    console.log(this.useNumber);
    console.log(this.useSymbol);
  }
}
