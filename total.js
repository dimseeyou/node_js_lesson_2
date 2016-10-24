//вывод файла total.txt в консоль
var fs = require('fs');

//Чтение файла
fs.readFile('./total.txt', function (err, data) {
  if (err) 
    throw err;
 console.log('data is: ', data.toString());
});
