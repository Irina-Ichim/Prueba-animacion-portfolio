// Clase NeonCurve para representar una curva de Bezier cúbica
class NeonCurve {
  constructor(points = [], lerp = 0.5) {
    this.points = points;
    this.lerp = lerp;
  }

  // Agrega un punto a la curva
  addPoint(point) {
    this.points.push(point);
  }

  // Elimina el último punto de la curva
  removeLastPoint() {
    this.points.pop();
  }

  // Dibuja la curva en un contexto de canvas
  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);

    for (let i = 0; i < this.points.length - 1; i++) {
      const x = (1 - this.lerp) * this.points[i].x + this.lerp * this.points[i + 1].x;
      const y = (1 - this.lerp) * this.points[i].y + this.lerp * this.points[i + 1].y;
      ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, x, y);
    }

    ctx.stroke();
  }
}

// Clase NeonCursor para representar el efecto de cursor de neon
class NeonCursor {
  constructor({ el, shaderPoints = 16, curvePoints = 80, curveLerp = 0.5, radius1 = 5, radius2 = 30, velocityTreshold = 10, sleepRadiusX = 100, sleepRadiusY = 100, sleepTimeCoefX = 0.0025, sleepTimeCoefY = 0.0025, color = 0xffffff } = {}) {
    this.el = el;
    this.shaderPoints = shaderPoints;
    this.curvePoints = curvePoints;
    this.curveLerp = curveLerp;
    this.radius1 = radius1;
    this.radius2 = radius2;
    this.velocityTreshold = velocityTreshold;
    this.sleepRadiusX = sleepRadiusX;
    this.sleepRadiusY = sleepRadiusY;
    this.sleepTimeCoefX = sleepTimeCoefX;
    this.sleepTimeCoefY = sleepTimeCoefY;
    this.color = color;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.el.offsetWidth;
    this.canvas.height = this.el.offsetHeight;
    this.ctx = this.canvas.getContext('2d');
    this.el.appendChild(this.canvas);

    this.points = [];
    this.curve = new NeonCurve([], this.curveLerp);
    this.isDragging = false;
    this.velocity = { x: 0, y: 0 };
    this.lastPosition = { x: 0, y: 0 };
    this.radius = this.radius1;
    this.sleepTime = 0;

    this.setupEventListeners();
    this.renderLoop();
  }

  // Configura los eventos de mouse/touch
  setupEventListeners() {
    this.el.addEventListener('mousedown', this.onDown.bind(this));
    this.el.addEventListener('mousemove', this.onMove.bind(this));
    this.el.addEventListener('mouseup', this.onUp.bind(this));
    this.el.addEventListener('mouseleave', this.onLeave.bind(this));
    this.el.addEventListener('touchstart', this.onDown.bind(this));
    this.el.addEventListener('touchmove', this.onMove.bind(this));
    this.el.addEventListener('touchend', this.onUp.bind(this));
  }
}
  // Maneja el evento de inicio de
console.log('irina')