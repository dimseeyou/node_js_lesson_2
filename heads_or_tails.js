var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Выведем информацию в консоль
rl.write('Please, enter "heads (1) or tails (2) or "exit" if you want to stop the game \n'); // если орел (heads) - то введите 0, если думаете решка (tails) - 1.

var games = 0; 
var win = 0;
var lose = 0;
var win_lose = 0;
var win_in_row = 0;
var lose_in_row = 0;
var max_lose_in_row = 0;
var max_win_in_row = 0;

rl.on('line', function(num) {

var rand = Math.floor(Math.random() * 2 + 1);	 // случайное значение 
 // console.log(rand);	
if (num == rand){ //если угадали
  	console.log("YOU ARE WINNER!")
  	games++;
  	win++;
  	win_in_row++;
  	lose_in_row = 0;
  	if (win_in_row > max_win_in_row){
  		max_win_in_row = win_in_row
	}
}else{ 
  		if (num == 'exit'){ // точка выхода
  			win_lose = win/lose;
	  		//console.log("TOTAL");
	  		//console.log('games:', games, 'win:', win, 'lose:', lose, 'ratio:', win_lose); 
	  		//console.log('win in a row:', max_win_in_row, 'lose in a row:', max_lose_in_row); 
 			// Добавление данных к файлу
			fs.writeFile('./total.txt', 'heads or tails game! \n');
			fs.appendFile('./total.txt', 'games: '+games+ '\n');
		    fs.appendFile('./total.txt', 'win: '+win+ '\n');
			fs.appendFile('./total.txt', 'lose: '+lose+ '\n');
			fs.appendFile('./total.txt', 'ratio: '+win_lose+ '\n');
			fs.appendFile('./total.txt', 'win_in_row: '+max_win_in_row+ '\n');
			fs.appendFile('./total.txt', 'lose_in_row: '+max_lose_in_row+ '\n');
			this.close(); // конец обработки
	  	}else{
   			console.log("YOU ARE LOSER!") // если не угадали
  			games++;
  			lose++;
  			lose_in_row++;
  			win_in_row = 0;
		  	if (lose_in_row > max_lose_in_row){
		  		max_lose_in_row = lose_in_row
			}
   		}
}
  
});