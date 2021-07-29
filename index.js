/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
console.log('index.js: loaded');

const userId = 'js-primer-example';
function fetchUserInfo(userId) {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then((response) => {
      console.log(response.status);
      // エラーレスポンスが返されたことを検知する
      if (!response.ok) {
        console.error('エラーレスポンス', response);
      } else {
        return response.json().then((userInfo) => {
          // JSONパースされたオブジェクトが渡される
          console.log(userInfo);
        });
      }
    }).catch((error) => {
      console.error(error);
    });
}

// var lines = [];
// var reader = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// reader.on('line', (line) => {
//   lines.push(line);
// });
// reader.on('close', () => {
//   console.log(lines[0]);
// });
