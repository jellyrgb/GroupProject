import { GoapActionStatus } from "../../../../Wolfie2D/DataTypes/Goap/GoapAction";
import AABB from "../../../../Wolfie2D/DataTypes/Shapes/AABB";
import Vec2 from "../../../../Wolfie2D/DataTypes/Vec2";
import GameEvent from "../../../../Wolfie2D/Events/GameEvent";
import OrthogonalTilemap from "../../../../Wolfie2D/Nodes/Tilemaps/OrthogonalTilemap";
import { TargetableEntity } from "../../../GameSystems/Targeting/TargetableEntity";
import NPCActor from "../../../Actors/NPCActor";
import NPCBehavior from "../NPCBehavior";
import NPCAction from "./NPCAction";
import { ItemEvent } from "../../../Events";
import Timer from "../../../../Wolfie2D/Timing/Timer";
import { BattlerEvent } from "../../../Events";

export default class MonsterAttack extends NPCAction {

    protected timer: Timer;
    
    public constructor(parent: NPCBehavior, actor: NPCActor) {
        super(parent, actor);
        this._target = null;
        this.timer = new Timer(2000);
    }

    public performAction(target: TargetableEntity): void {
        if (this.timer.isStopped() && this.actor.position.distanceTo(target.position) < 50) {
            // Play the attacking animation of the monster
            this.actor.animation.play("ATTACKING", false);

            if (this.actor.battleGroup === 2) {
                // Send a attack event
                this.emitter.fireEvent(BattlerEvent.BATTLER_ATTACK, {
                    attacker: this.actor,
                    target: target,
                    damage: 10
                });
            }

            this.timer.start();
        }
        
        setTimeout(() => {
            this.actor.animation.play("IDLE");
        }, 1000);

        // Finish the action
        this.finished();
    }

    public onEnter(options: Record<string, any>): void {
        super.onEnter(options);
    }

    public handleInput(event: GameEvent): void {
        switch(event.type) {
            default: {
                super.handleInput(event);
                break;
            }
        }
    }

    public update(deltaT: number): void {
        super.update(deltaT);
    }

    public onExit(): Record<string, any> {
        return super.onExit();
    }

}