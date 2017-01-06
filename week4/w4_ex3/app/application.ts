import { Point } from './modules/point'
import { Vector } from './modules/vector'
import { Rect } from './modules/rect'
import { Side } from './modules/side'
import { Obstacle } from './modules/obstacle' 
import { Sprite } from './modules/sprite'
import { Ball } from './modules/ball'
import { Paddle } from './modules/paddle'
import { Brick } from './modules/brick'
import { HardBrick } from './modules/hardbrick' 
import { SuperHardBrick } from './modules/superhardbrick'
import { GameState } from './modules/gamestate' 
import { KeyCodes } from './modules/keycodes'
import { Game } from './modules/game'

console.log('Hello from BrickBuster !!!');

var game = new Game(
    <HTMLElement>document.getElementsByClassName("ball")[0],
    <HTMLElement>document.getElementsByClassName("paddle")[0],
    <HTMLCollection>document.getElementsByClassName("brick"),
    <HTMLElement>document.getElementsByClassName("game-board")[0],
    <HTMLElement>document.getElementById('lives'),
    <HTMLElement>document.getElementById('score'),
    <HTMLElement>document.getElementById('newGame')    
);

game.run();