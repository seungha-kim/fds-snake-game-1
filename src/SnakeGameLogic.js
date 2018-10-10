import {ROWS, COLS} from './config';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  // 배열 앞쪽이 머리, 뒷쪽이 꼬리
  this.joints = [
    {x: 3, y: 0},
    {x: 2, y: 0},
    {x: 1, y: 0}
  ];

  // 먹이의 좌표
  this.fruit = {x: 29, y: 19};
  this.direction = 'right';
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  console.log('up');

  // 뱀이 위쪽으로 바라보게 만들기
  this.direction = 'up'
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  console.log('down');

  // 뱀이 아래쪽으로 바라보게 만들기
  this.direction = 'down'
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log('left');

  // 뱀이 왼쪽으로 바라보게 만들기
  this.direction = 'left'
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log('right');

  this.direction = 'right'
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  let newHead;
  if (this.direction === 'right') {
    
    // 이전 머리의 위치를 기준으로
    // 현재 오른쪽을 바라보고 있으면
    // x: 이전 머리의 x + 1
    // y: 이전 머리의 y
    newHead = {
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    }
  } else if (this.direction === 'left') {
    newHead = {
      x: this.joints[0].x - 1,
      y: this.joints[0].y
    }
  } else if (this.direction === 'up') {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y - 1
    }
  } else if (this.direction === 'down') {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    }
  }
  
  if (newHead.x !== this.fruit.x || newHead.y !== this.fruit.y) {
    this.joints.pop()
  } else {
    this.fruit.x = Math.floor(Math.random() * COLS)
    this.fruit.y = Math.floor(Math.random() * ROWS)
  }

  if (newHead.x < 0 || newHead.x >= COLS || newHead.y < 0 || newHead.y >= ROWS) {
    return false
  }

  // for (const j of this.joints) {
  //   if (j.x === newHead.x && j.y === newHead.y) {
  //     return false
  //   }
  // }

  if (this.joints.some(j => j.x === newHead.x && j.y === newHead.y)) {
    return false
  }

  this.joints.unshift(newHead)
  return true;
}

export default SnakeGameLogic;
