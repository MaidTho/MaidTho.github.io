const canvas = document.getElementById("connected-dots");
const ctx = canvas.getContext("2d");

// Resize canvas to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = [];
let mouse = { x: null, y: null };

// Track mouse position
window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initDots();
});

class Dot {
    constructor(x, y, dx, dy, size, color = "white") {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
        this.isHovered = false;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        // Move dots
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // Draw the dot
        this.draw();
    }

    hoverEffect() {
        const distance = Math.sqrt((this.x - mouse.x) ** 2 + (this.y - mouse.y) ** 2);
        if (distance < this.size) {
            this.color = "green";
            this.size += 1;
            this.isHovered = true;
            return true;
        }
        return false;
    }
}

const initDots = () => {
    dots = [];
    for (let i = 0; i < 200; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const dx = (Math.random() - 0.5) * 2;
        const dy = (Math.random() - 0.5) * 2;

        dots.push(new Dot(x, y, dx, dy, size));
    }
};

const connectDots = () => {
    for (let i = 0; i < dots.length; i++) {
        for (let j = i; j < dots.length; j++) {
            const distance = Math.sqrt(
                (dots[i].x - dots[j].x) ** 2 + (dots[i].y - dots[j].y) ** 2
            );

            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
                ctx.lineWidth = 1;
                ctx.moveTo(dots[i].x, dots[i].y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.stroke();
            }
        }

        // Interaction with mouse
        const mouseDist = Math.sqrt(
            (dots[i].x - mouse.x) ** 2 + (dots[i].y - mouse.y) ** 2
        );
        if (mouseDist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `cyan`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    }
};

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach((dot, index) => {
        if (dot.color === "red" && dot.hoverEffect()) {
            setTimeout(() => {
                dots.splice(index, 1);
                showScore(dot.x, dot.y);
            }, 100);
        } else {
            dot.update();
        }
    });
    connectDots();

    // Calculate distance from mouse to center of canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxDist = Math.sqrt(centerX ** 2 + centerY ** 2);
    const mouseDist = Math.sqrt((mouse.x - centerX) ** 2 + (mouse.y - centerY) ** 2);
    const opacity = 1 - (mouseDist / maxDist);

    // Set canvas opacity
    canvas.style.opacity = opacity;

    requestAnimationFrame(animate);
};

const addRedDots = () => {
    for (let i = 0; i < 100; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const dx = (Math.random() - 0.5) * 2;
        const dy = (Math.random() - 0.5) * 2;

        const redDot = new Dot(x, y, dx, dy, size, "red");
        dots.push(redDot);
    }
};

const showScore = (x, y) => {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("+1", x, y);
    setTimeout(() => {
        ctx.clearRect(x - 10, y - 20, 30, 30);
    }, 500);
};

// Initialize and start the animation
initDots();
addRedDots();
animate();
