<script>
    import { onMount } from 'svelte';
  
    let rows = 6;
    let columns = 7;
    let board = Array.from({ length: rows }, () => Array(columns).fill(null));
    let currentPlayer = 'Red';
    let winner = null;
    let isDraw = false;
  
    let player1 = '';
    let player2 = '';
    let player1Name = 'Player 1';
    let player2Name = 'Player 2';
    let showStartModal = true;
    let showResultModal = false;
  
    const dropPiece = (column) => {
      if (winner || isDraw) return;
  
      for (let row = rows - 1; row >= 0; row--) {
        if (!board[row][column]) {
          board[row][column] = currentPlayer;
          if (checkWinner(row, column)) {
            winner = currentPlayer === 'Red' ? player1Name : player2Name;
            showResultModal = true;
          } else if (board.every((row) => row.every((cell) => cell))) {
            isDraw = true;
            showResultModal = true;
          } else {
            currentPlayer = currentPlayer === 'Red' ? 'Yellow' : 'Red';
          }
          return;
        }
      }
    };
  
    const checkWinner = (row, col) => {
      return (
        checkDirection(row, col, 1, 0) || // Horizontal
        checkDirection(row, col, 0, 1) || // Vertical
        checkDirection(row, col, 1, 1) || // Diagonal /
        checkDirection(row, col, 1, -1)   // Diagonal \
      );
    };
  
    const checkDirection = (row, col, dRow, dCol) => {
      let count = 1;
      for (let dir = -1; dir <= 1; dir += 2) {
        let r = row + dir * dRow;
        let c = col + dir * dCol;
        while (
          r >= 0 &&
          r < rows &&
          c >= 0 &&
          c < columns &&
          board[r][c] === currentPlayer
        ) {
          count++;
          r += dir * dRow;
          c += dir * dCol;
        }
      }
      return count >= 4;
    };
  
    const resetGame = () => {
      board = Array.from({ length: rows }, () => Array(columns).fill(null));
      currentPlayer = 'Red';
      winner = null;
      isDraw = false;
      showResultModal = false;
    };
  
    const startGame = () => {
      player1Name = player1 || 'Player 1';
      player2Name = player2 || 'Player 2';
      showStartModal = false;
    };
  </script>
  
  
    <style>
  /* Overlay */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  /* Victory Popup */
  .victory-popup {
    background: linear-gradient(to bottom, #50bfff, #62d8ff);
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    animation: popUp 0.3s ease-in-out;
  }

  .victory-popup h1 {
    font-size: 1.8rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
  }

  /* Score Section */
  .score-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffcf2a;
    padding: 10px 20px;
    border-radius: 25px;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .score-container span {
    color: #fff;
  }

  /* Stats Section */
  .stats {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .stats div {
    text-align: center;
    font-size: 1.2rem;
  }

  .stats span:first-child {
    font-size: 1.5rem;
  }

  /* Buttons Section */
  .buttons {
    display: flex;
    justify-content: space-around;
  }

  .buttons button {
    background: #fff;
    color: #333;
    padding: 10px 15px;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: transform 0.2s ease;
  }

  .buttons button:hover {
    transform: scale(1.1);
  }

  .buttons .restart {
    background: #5cc44c;
    color: white;
  }

  .buttons .next {
    background: #ffa726;
    color: white;
  }

  .buttons .menu {
    background: #42a5f5;
    color: white;
  }

  @keyframes popUp {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }


    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: linear-gradient(to bottom, #282c34, #444);
      color: white;
      min-height: 100vh;
    }
  
    .board {
      display: grid;
      grid-template-columns: repeat(7, 60px);
      gap: 5px;
      margin: 20px;
    }
  
    .cell {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: lightgray;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .cell.Red {
      background-color: red;
    }
  
    .cell.Yellow {
      background-color: yellow;
    }
  
    .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      color: black;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
  
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  
    button {
      padding: 10px 20px;
      margin: 10px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .start-modal {
      display: flex;
      flex-direction: column;
      gap: 15px;
      text-align: center;
      background: white;
      color: black;
      padding: 20px;
      border-radius: 10px;
    }
  
    .start-modal input {
      padding: 10px;
      font-size: 1rem;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  </style>
  
  <div class="game-container">
    <h1>Connect 4</h1>
    <div class="board">
      {#each board as row, rowIndex}
        {#each row as cell, colIndex}
          <div
            class="cell {cell}"
            on:click={() => dropPiece(colIndex)}
          ></div>
        {/each}
      {/each}
    </div>
  
    {#if showStartModal}
      <div class="overlay">
        <div class="popup start-modal">
          <h2>Enter Player Names</h2>
          <input
            type="text"
            bind:value={player1}
            placeholder="Player 1 (Red)"
          />
          <input
            type="text"
            bind:value={player2}
            placeholder="Player 2 (Yellow)"
          />
          <button on:click={startGame}>Start Game</button>
        </div>
      </div>
    {/if}

    {#if showResultModal}
  <div class="overlay">
    <div class="victory-popup">
        {#if winner}
        <h2>🎉 {winner} Wins! 🎉</h2>
      {:else if isDraw}
        <h2>It's a Draw!</h2>
      {/if}
      <div class="score-container">
        <p>Score:</p>
        <span class="score">10012</span>
      </div>
      <div class="stats">
        <div>
          <span>❤️</span>
          <span>201</span>
        </div>
        <div>
          <span>🍀</span>
          <span>056</span>
        </div>
      </div>
      <div class="buttons">
        <button class="restart" on:click={resetGame}>↺ Restart</button>
        <button class="next">→ Next</button>
        <button class="menu">☰ Menu</button>
      </div>
    </div>
  </div>
{/if}
  </div>
  