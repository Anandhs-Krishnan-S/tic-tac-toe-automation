const boardEl = document.getElementById('board');
const messageEl = document.getElementById('message');
const resetBtn = document.getElementById('reset');

let board = Array(9).fill(null);
let xTurn = true;
let gameOver = false;

function render(){
  boardEl.innerHTML = '';
  for(let i=0;i<9;i++){
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = board[i] || '';
    cell.addEventListener('click', () => move(i));
    boardEl.appendChild(cell);
  }
}

function move(i){
  if(gameOver || board[i]) return;
  board[i] = xTurn ? 'X' : 'O';
  xTurn = !xTurn;
  const winner = getWinner(board);
  if(winner){
    messageEl.textContent = `Player ${winner} wins!`;
    gameOver = true;
  }else if(board.every(Boolean)){
    messageEl.textContent = 'Draw!';
    gameOver = true;
  }else{
    messageEl.textContent = `Player ${xTurn ? 'X' : 'O'}'s turn`;
  }
  render();
}

function getWinner(b){
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for(const [a,b2,c] of lines){
    if(b[a] && b[a]===b[b2] && b[a]===b[c]) return b[a];
  }
  return null;
}

function reset(){
  board = Array(9).fill(null);
  xTurn = true;
  gameOver = false;
  messageEl.textContent = "Player X's turn";
  render();
}

resetBtn.addEventListener('click', reset);
render();
