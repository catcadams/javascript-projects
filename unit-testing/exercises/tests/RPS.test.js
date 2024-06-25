const whoWon = require("../RPS.js");

describe("whoWon", function () {
  test("returns 'TIE!' when player1 is equal to player2", function () {
    let output = whoWon("rock", "rock");
    expect(output).toEqual("TIE!");
  });
  test("returns 'Player 2 wins!' if player1 is 'rock' and player2 is 'paper'", function () {
    let output = whoWon("rock", "paper");
    expect(output).toEqual("Player 2 wins!");
  });
  test("returns 'Player 2 wins!' if player1 is 'paper' and player2 is 'scissors'", function () {
    let output = whoWon("paper", "scissors");
    expect(output).toEqual("Player 2 wins!");
  });
  test("returns 'Player 2 wins!' if player1 is 'scissors' and player2 is 'rock'", function () {
    let output = whoWon("scissors", "rock");
    expect(output).toEqual("Player 2 wins!");
  });
  test("returns 'Player 1 wins!' if player1 is 'paper' and player2 is 'rock'", function () {
    let output = whoWon("paper", "rock");
    expect(output).toEqual("Player 1 wins!");
  });
  // test("returns 'Invalid input.' if player1 or player2 is not equal to rock, paper, or scissors", function () {
  //   let output = whoWon("launch", "code");
  //   expect(output).toEqual("Invalid input.");
  // });
});
