// SplashScreenScene.js
import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import { UIElementType } from "../../Wolfie2D/Nodes/UIElements/UIElementTypes";
import Layer from "../../Wolfie2D/Scene/Layer";
import Scene from "../../Wolfie2D/Scene/Scene";
import Color from "../../Wolfie2D/Utils/Color";
import Label from "../../Wolfie2D/Nodes/UIElements/Label";
import MainHW4Scene from "./MainHW4Scene";
import GameEvent from "../../Wolfie2D/Events/GameEvent";
import AstarDemoScene from "./AstarDemoScene";
import GuardDemoScene from "./GuardDemoScene";
import MainMenu from "./MainMenu";

export default class SplashScreenScene extends Scene {
    loadScene(): void {
        this.load.image("splashLogo", "hw4_assets/sprites/splash.png");
    }

    startScene(): void {
        const center = this.viewport.getCenter();

        const splashLogo = this.add.sprite("splashLogo", "primary");
        splashLogo.position.set(center.x, center.y);

    }

    updateScene(deltaT: number): void {
    }
}
