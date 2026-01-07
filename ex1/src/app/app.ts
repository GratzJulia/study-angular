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
    return (!this.useLetter && !this.useNumber && !this.useSymbol) || this.pwdLen < 1;
  }

  onClick() {
    this.result = ''
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let validDomain = '';

    if (this.useLetter) {
      validDomain += letters;
    }
    if (this.useNumber) {
      validDomain += numbers;
    }
    if (this.useSymbol) {
      validDomain += symbols;
    }

    for (let i = 0; i < this.pwdLen; i++) {
      const index = Math.floor(Math.random() * validDomain.length);
      this.result += validDomain[index];
    }
    // console.log(this.result);
  }
}
