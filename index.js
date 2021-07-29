// eslint-disable-next-line no-console
console.log('index.js: loaded');

// eslint-disable-next-line no-unused-vars
function fetchUserInfo(userId) {
  // eslint-disable-next-line no-undef
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    // eslint-disable-next-line consistent-return
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.status);
      // エラーレスポンスが返されたことを検知する
      if (!response.ok) {
        // eslint-disable-next-line no-console
        console.error('エラーレスポンス', response);
      } else {
        return response.json().then((userInfo) => {
          // JSONパースされたオブジェクトが渡される
          // eslint-disable-next-line no-console
          console.log(userInfo);
        });
      }
    }).catch((error) => {
      // eslint-disable-next-line no-console
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
