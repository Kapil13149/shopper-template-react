import { randomInt } from 'crypto-js';

export function useCaptcha() {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)]; // Randomly select a digit from 0 to 9
    }
    return otp;
  }
  





// {
//     var a = Math.random() * 10;
//     var b = Math.random() * 10;
//     var c = Math.random() * 10;
//     var d = Math.random() * 10;
//     var e = Math.random() * 10;
//     var f = Math.random() * 10;

//     var code = `${Math.round(a)}${Math.round(b)}${Math.round(c)}${Math.round(d)}${Math.round(e)}${Math.round(f)}`;

//     return code;
// }