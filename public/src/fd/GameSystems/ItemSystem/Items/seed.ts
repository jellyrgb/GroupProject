import Vec2 from "../../../../Wolfie2D/DataTypes/Vec2";
import Sprite from "../../../../Wolfie2D/Nodes/Sprites/Sprite";
import Scene from "../../../Scenes/Scene";
import Item from "../Item";

export default class Seed extends Item {
    
    protected st: number;

    public constructor(sprite: Sprite, level: number) {
        super(sprite);

        let rand = Math.random();

        // If level is 1 or 2
        if (level == 1 || level == 2) {
            if (rand <= 0.7) {
                if (rand <= 0.35) {
                    this.st = 1;
                } else if (rand <= 0.56) {
                    this.st = 2;
                } else {
                    this.st = 3;
                }
            } else {
                if (rand <= 0.85) {
                    this.st = 4;
                } else if (rand <= 0.94) {
                    this.st = 5;
                } else {
                    this.st = 6;
                }
            }
        }

        if (level == 3 || level == 4) {
            if (rand <= 0.5) {
                if (rand <= 0.25) {
                    this.st = 1;
                } else if (rand <= 0.4) {
                    this.st = 2;
                } else {
                    this.st = 3;
                }
            } else if (rand <= 0.8) {
                if (rand <= 0.65) {
                    this.st = 4;
                } else if (rand <= 0.74) {
                    this.st = 5;
                } else {
                    this.st = 6;
                }
            } else {
                if (rand <= 0.9) {
                    this.st = 7;
                } else if (rand <= 0.96) {
                    this.st = 8;
                } else {
                    this.st = 9;
                }
            }
        }

        // If level is 5 or 6
        if (level == 5 || level == 6) {
            if (rand <= 0.4) {
                if (rand <= 0.2) {
                    this.st = 1;
                } else if (rand <= 0.32) {
                    this.st = 2;
                } else {
                    this.st = 3;
                }
            } else if (rand <= 0.7) {
                if (rand < 0.55) {
                    this.st = 4;
                } else if (rand <= 0.64) {
                    this.st = 5;
                } else {
                    this.st = 6;
                }
            } else if (rand <= 0.9) {
                if (rand <= 0.8) {
                    this.st = 7;
                } else if (rand <= 0.86) {
                    this.st = 8;
                } else {
                    this.st = 9;
                }
            } else {
                if (rand <= 0.95) {
                    this.st = 10;
                } else if (rand <= 0.98) {
                    this.st = 11;
                } else {    
                    this.st = 12;
                }
            }
        }
    }

    public get star(): number { return this.st; }
    public set star(st: number) { this.st = st; }

}