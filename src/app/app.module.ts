import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TicTacToeComponent } from './tictactoe.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ TicTacToeComponent ],
  bootstrap:    [ TicTacToeComponent ]
})
export class AppModule { }
