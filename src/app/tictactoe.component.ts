import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TicTacToeComponent {
  currentPlayer = 'X';
  winner = 'None';
  buttons: any = [];
  totalTurns = 0;
  winningRows = [
    [0,1,2],[3,4,5],[6,7,8], // horizontal rows
    [0,3,6],[1,4,7],[2,5,8], // vertical rows
    [0,4,8],[2,4,6] // diagonal rows
  ];

  reset(): void {
    if (this.buttons.length == 0) this.buttons = document.querySelectorAll('button.ttt-button');

    this.currentPlayer = 'X';
    this.winner = 'None';
    this.buttons.forEach(button => button.textContent = '');
    this.totalTurns = 0;
  }

  buttonClicked(button: any, row: number, col: number) {
    if (this.winner != 'None') return; // game over, winner found
    if (button.textContent.length > 0) return; // already marked
  
    button.textContent = this.currentPlayer;
    this.totalTurns++;
    this.checkWinner(row, col);
    this.currentPlayer = this.winner != 'None' ? '-' : (this.currentPlayer == 'X' ? 'O': 'X');
  }

  checkWinner(row: number, col: number): void {
    if (this.totalTurns < 5) return; // not enough turns to determine winner
  
    if (this.buttons.length == 0) this.buttons = document.querySelectorAll('button.ttt-button');

    let isWinner = false;    
    const buttonIndex = ((row-1)*3)+(col-1);
    for (let i = 0; i < this.winningRows.length; i++) {
        const wr = this.winningRows[i];
        if (wr.includes(buttonIndex) &&
                this.buttons[wr[0]].textContent == this.currentPlayer &&
                this.buttons[wr[1]].textContent == this.currentPlayer &&
                this.buttons[wr[2]].textContent == this.currentPlayer) {
            isWinner = true;
            break;
        }
    }
    if (isWinner) this.winner = this.currentPlayer;
  }
}
