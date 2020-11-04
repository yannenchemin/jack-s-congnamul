let tree;
let leafpoint;


function setup() {
  createCanvas(400, 700);
  tree = new Tree();
  background(50, 50, 100);


}

function draw() {

  tree.grow(); //식물아 자라라!
  tree.showme(); //식물아 보여라!
  tree.growleaf(); //잎이여 자라소서~
  tree.energe(); //줄기 굵기를 처음엔 굵었다가 y가0으로 갈 수록 줄어들기!

}

class Tree {
  constructor() {
    this.x = width / 2; //줄기의 시작지점
    this.y = height; //줄기의 시작지점
    this.diameter = 70;
    this.speed = 3; //성장 속도
  }

  energe() {
    this.diameter = this.diameter - random(0.05, 0.5); //이런식으로 해도 줄어들것같아요 -ㅅㅇ-
    if (this.diameter <= 0) {
      this.diameter = 70;
      this.y = height;
    }
  }

  grow() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, -this.speed);
    if (this.y <= 0) {
      this.y = height;
      this.x -= random(-100, 100);
    } //풀들이 무성하게 자라도록 해봤습니다 근데 너무 겹치는듯해욤 -승현-
  }


  showme() {
    noStroke();
    fill(30, random(100, 200), 20); //줄기의 색깔
    rect(this.x, this.y, this.diameter / 2, this.diameter / 2); //

  }


  growleaf() { //잎이 나오게 해볼까요? - 인철-
    leafpoint = int(random(1, 20)); //잠시 수정했어요 -소영-

    ellipseMode(CORNER);

    if (leafpoint == 1) { //오른쪽 잎
      fill(30, 150, 20);
      square(this.x + random(10, 20), this.y, random(10, 20), 300, 0, 300, 0);
    } else if (leafpoint == 10) { //왼쪽 잎
      fill(30, 150, 20);
      square(this.x - random(10, 20), this.y + 20, random(10, 20), 0, 300, 0, 300);
    }
  }
}