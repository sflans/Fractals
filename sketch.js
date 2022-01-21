function setup() {
    const size = min(windowWidth, windowHeight);
    createCanvas(size, size);
    colorMode(HSL, 1);
}

function draw() {
    scale(width, height);
    background(0);
    stroke(1);
    strokeWeight(0.002);

    drawFractal(0.5, 0.5);
}

function polar(angle, radius) {
    return {
        x: cos(angle * PI * 2) * radius,
        y: sin(angle * PI * 2) * radius,
    }

}


function drawFractal(x, y) {
    const count = 10;
    const radius = 0.4;
    for (let i = 0; i < count; i++) {
        const f = i / count;
        const angle = f;
        const p1 = polar(angle, radius);
        const p2 = polar(angle + 1 / count, radius);
        line(x + p1.x, y + p1.y, x + p2.x, y + p2.y);
    }
}