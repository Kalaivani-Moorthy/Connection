<script>
    import { goto } from '$app/navigation';
  
    const startGame = () => {
      goto('/game');
    };
  </script>
  
  <style>
    .landing {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: linear-gradient(to bottom, #4caf50, #8bc34a);
      color: white;
      text-align: center;
      font-family: Arial, sans-serif;
    }
  
    .start-button {
      padding: 15px 30px;
      margin-top: 20px;
      font-size: 1.2em;
      font-weight: bold;
      color: white;
      background-color: #007bff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .start-button:hover {
      background-color: #0056b3;
    }
  </style>
  
  <div class="landing">
    <h1>Welcome to Connect 4</h1>
    <p>Challenge your friends and see who can Connect 4 first!</p>
    <button class="start-button" on:click={startGame}>Start Game</button>
  </div>
  