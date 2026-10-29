import { Component, ElementRef, ViewChild } from '@angular/core';
import confetti from 'canvas-confetti';
interface FireworkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  radius: number;
  decay: number;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
 
  @ViewChild('fireworksCanvas')
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationId = 0;
  private width = 0;
  private height = 0;
  private lastBurst = 0;

  private particles: FireworkParticle[] = [];

  private colors = [
    '#00E5FF',
    '#FF168F',
    '#B8FF36',
    '#FFD700',
    '#FFFFFF',
    '#A855F7'
  ];

  private resizeHandler = () => this.resizeCanvas();

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');

    if (!context) return;

    this.ctx = context;
    this.resizeCanvas();

    window.addEventListener('resize', this.resizeHandler);

    // Initial fireworks across the hero
    this.createFirework(this.width * 0.15, this.height * 0.60);
    this.createFirework(this.width * 0.34, this.height * 0.22);
    this.createFirework(this.width * 0.68, this.height * 0.24);
    this.createFirework(this.width * 0.86, this.height * 0.48);

    this.lastBurst = performance.now();
    this.animate();
  }

  private resizeCanvas(): void {
    if (!this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.width = rect.width;
    this.height = rect.height;

    canvas.width = Math.round(this.width * dpr);
    canvas.height = Math.round(this.height * dpr);

    const context = canvas.getContext('2d');
    if (!context) return;

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.ctx = context;
  }

  private createFirework(x: number, y: number): void {
    const color = this.colors[
      Math.floor(Math.random() * this.colors.length)
    ];

    const count = 85 + Math.floor(Math.random() * 65);

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count
        + (Math.random() - 0.5) * 0.08;

      const speed = 1.3 + Math.random() * 4.5;
      const life = 45 + Math.random() * 45;

      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life,
        maxLife: life,
        color: Math.random() > 0.2
          ? color
          : this.colors[
              Math.floor(Math.random() * this.colors.length)
            ],
        radius: 0.8 + Math.random() * 1.5,
        decay: 0.96 + Math.random() * 0.025
      });
    }
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);

    const now = performance.now();

    // Clear previous frame for sharp spark trails
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Launch a new burst every 450–900 milliseconds
    if (now - this.lastBurst > 450 + Math.random() * 450) {
      const x = this.width * (0.06 + Math.random() * 0.88);
      const y = this.height * (0.08 + Math.random() * 0.52);

      this.createFirework(x, y);
      this.lastBurst = now;
    }

    this.particles = this.particles.filter(p => p.life > 0);

    for (const p of this.particles) {
      const opacity = Math.max(0, p.life / p.maxLife);

      // Motion and gravity
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= p.decay;
      p.vy = p.vy * p.decay + 0.025;
      p.life--;

      // Draw glowing spark
      this.ctx.save();
      this.ctx.globalAlpha = opacity;
      this.ctx.strokeStyle = p.color;
      this.ctx.fillStyle = p.color;
      this.ctx.lineWidth = p.radius;
      this.ctx.shadowBlur = 9;
      this.ctx.shadowColor = p.color;

      // Spark trail
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(
        p.x - p.vx * 2.8,
        p.y - p.vy * 2.8
      );
      this.ctx.stroke();

      // Bright spark head
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.restore();
    }
  };

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resizeHandler);
    this.particles = [];
  }
}