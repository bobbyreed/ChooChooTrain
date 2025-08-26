import { Graphics } from 'pixi.js';
import moonSVG from '../public/assets/moon.svg';

export function addStarsAndMoon(app) {
  const starCount = 20;
    const stars = new Graphics();
    const moon = new Graphics().svg(moonSVG);

    for (let index = 0; index < starCount; index++) {
        const x = (index * 0.78695 * app.screen.width) % app.screen.width;
        const y = (index * 0.9382 * app.screen.height) % app.screen.height;
        const radius = 2 + Math.random() * 3;
        const rotation = Math.random() * Math.PI * 2;

        stars.star(x, y, 5, radius, 0, rotation).fill({ color: 0xffdf00, alpha: radius / 5 });
    }

    moon.x = app.screen.width / 2 + 100;
    moon.y = app.screen.height / 8;
    app.stage.addChild(stars);
    app.stage.addChild(moon);
    }

