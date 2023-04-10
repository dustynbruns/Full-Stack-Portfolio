import React, { useState, useEffect, useRef } from 'react';
import '../styles/Breakout.css';

const Breakout = () => {
  const canvasRef = useRef(null);
  const [game, setGame] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setGame(new BreakoutGame(ctx));
  }, []);

  useEffect(() => {
    if (game) {
      game.start();
    }
  }, [game]);

  return (
    <div className="breakout">
      <h2>Breakout</h2>
      <canvas ref={canvasRef} width="520" height="480" />
    </div>
  );
};

class BreakoutGame {
  constructor(ctx) {
    this.ctx = ctx;
    this.ballRadius = 10;
    this.x = this.ctx.canvas.width / 2;
    this.y = this.ctx.canvas.height - 30;
    this.dx = 2;
    this.dy = -2;
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (this.ctx.canvas.width - this.paddleWidth) / 2;
    this.rightPressed = false;
    this.leftPressed = false;
    this.interval = null;
    this.blockRowCount = 2;
    this.blockColumnCount = 8;
    this.blockWidth = 50;
    this.blockHeight = 20;
    this.blockPadding = 10;
    this.blockOffsetTop = 30;
    this.blockOffsetLeft = 30;
    this.blocks = [];

    for (let c = 0; c < this.blockColumnCount; c++) {
      this.blocks[c] = [];
      for (let r = 0; r < this.blockRowCount; r++) {
        this.blocks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }

    document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
  }

  keyDownHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawPaddle() {
    this.ctx.beginPath();
    this.ctx.rect(this.paddleX, this.ctx.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawBlocks() {
    for (let c = 0; c < this.blockColumnCount; c++) {
      for (let r = 0; r < this.blockRowCount; r++) {
        if (this.blocks[c][r].status === 1) {
          const blockX = c * (this.blockWidth + this.blockPadding) + this.blockOffsetLeft;
          const blockY = r * (this.blockHeight + this.blockPadding) + this.blockOffsetTop;
          this.blocks[c][r].x = blockX;
          this.blocks[c][r].y = blockY;
          this.ctx.beginPath();
          this.ctx.rect(blockX, blockY, this.blockWidth, this.blockHeight);
          this.ctx.fillStyle = '#0095DD';
          this.ctx.fill();
          this.ctx.closePath();
        }
      }
    }
  }

  collisionDetection() {
    for (let c = 0; c < this.blockColumnCount; c++) {
      for (let r = 0; r < this.blockRowCount; r++) {
        const b = this.blocks[c][r];
        if (b.status === 1) {
          if (this.x > b.x && this.x < b.x + this.blockWidth && this.y > b.y && this.y < b.y + this.blockHeight) {
            this.dy = -this.dy;
            b.status = 0;
            if (this.allBlocksDestroyed()) {
              alert('You won!');
              document.location.reload();
              clearInterval(this.interval);
            }
          }
        }
      }
    }
  }

  allBlocksDestroyed() {
    for (let c = 0; c < this.blockColumnCount; c++) {
      for (let r = 0; r < this.blockRowCount; r++) {
        if (this.blocks[c][r].status === 1) {
          return false;
        }
      }
    }
    return true;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawBall();
    this.drawPaddle();
    this.drawBlocks();
    this.collisionDetection();

    if (this.x + this.dx > this.ctx.canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
      this.dx = -this.dx;
    }

    if (this.y + this.dy < this.ballRadius) {
      this.dy = -this.dy;
    } else if (this.y + this.dy > this.ctx.canvas.height - this.ballRadius) {
      if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
        this.dy = -this.dy;
      } else {
        alert('GAME OVER');
        document.location.reload();
        clearInterval(this.interval);
      }
    }

    if (this.rightPressed && this.paddleX < this.ctx.canvas.width - this.paddleWidth) {
      this.paddleX += 7;
    } else if (this.leftPressed && this.paddleX > 0) {
      this.paddleX -= 7;
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(this.draw.bind(this), 10);
    }
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }
}

export default Breakout;
