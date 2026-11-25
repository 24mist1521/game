export function getRandomStarSize(min, max) {
  if (max <= min) return min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function drawStar(ctx, centerX, centerY, radius, color = "yellow") {
const innerRadius = radius * 0.4;
ctx.beginPath();
for (let i = 0; i < 10; i++) {
  const angle = (i * 36- 90) *(Math.PI / 180);
  const r = i % 2 === 0 ? radius : innerRadius;
  const x = centerX + Math.cos(angle) * r;
  const y = centerY + Math.sin(angle) * r;
  if (i===0) ctx.moveTo(x,y);
  else ctx.lineTo(x,y);
}
ctx.closePath();
ctx.fillStyle=color;
ctx.fill();

}
