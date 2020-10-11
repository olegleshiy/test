export const drawPieSlice = (ctx, centerX, centerY, radius, startAngle, endAngle, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerY, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for ( let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
