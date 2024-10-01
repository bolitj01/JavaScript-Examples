let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

const imgs = document.querySelectorAll("img");
imgs.forEach(img => {
  img.addEventListener('dragstart', (event) => {
    //Set current player data
    event.dataTransfer.setData('text/plain', currentPlayer);

    //Hide the dragged image
    event.target.style.opacity = '0.2';
    console.log(`dragstart - set data ${currentPlayer}`);
  });
});

const cells = document.querySelectorAll('.cell');

cells.forEach((cell, index) => {

  cell.addEventListener('dragover', (event) => {
    event.preventDefault();
    cell.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';  // Change background on dragover
    console.log("dragover - changing background");
  });

  cell.addEventListener('dragleave', () => {
    cell.style.backgroundColor = '';  // Reset background on dragleave
    console.log("dragleave - changing background back");
  });

  cell.addEventListener('drop', (event) => {
    event.preventDefault();
    const draggedPlayer = event.dataTransfer.getData('text/plain');
    console.log(`drop - got data ${draggedPlayer}`);
    if (!cell.style.backgroundImage && !board[index]) {
      cell.style.backgroundImage = `url(${draggedPlayer}.png)`;
      board[index] = draggedPlayer;
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
      const playerImg = document.querySelector("#player")
      playerImg.src = `${currentPlayer}.png`; // Change the dragged image to the current player
      playerImg.style.opacity = '1'; // Show the dragged image
      cell.style.backgroundColor = '';  // Reset background on dragleave
      checkWinner();
    }
  });
});

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      alert(`Player ${board[a]} wins! Resetting the board...`);
      resetGame();
      return;
    }
  }

  if (!board.includes('')) {
    alert('It\'s a draw! Resetting the board...');
    resetGame();
  }
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  document.querySelector("#player").src = `${currentPlayer}.png`;
  cells.forEach(cell => {
    cell.style.backgroundImage = null;
  });
}
