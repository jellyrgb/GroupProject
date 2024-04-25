import State from "../../../../Wolfie2D/DataTypes/State/State";
import GameEvent from "../../../../Wolfie2D/Events/GameEvent";
import { BattlerEvent, HudEvent, ItemEvent } from "../../../Events"
import Item from "../../../GameSystems/ItemSystem/Item";
import PlayerAI from "../PlayerAI";



export enum PlayerAnimationType {
    IDLE = "IDLE",
    MOVE_UP = "MOVE_UP",
    MOVE_DOWN = "MOVE_DOWN",
    MOVE_LEFT = "MOVE_LEFT",
    MOVE_RIGHT = "MOVE_RIGHT",
}


export enum PlayerStateType {
    IDLE = "IDLE",
    INVINCIBLE = "INVINCIBLE",
    ATTACKING = "ATTACKING",
    MOVING = "MOVING",
    MOVE_UP = "MOVE_UP",
    MOVE_DOWN = "MOVE_DOWN",
    MOVE_LEFT = "MOVE_LEFT",
    MOVE_RIGHT = "MOVE_RIGHT",
    DEAD = "DEAD"
}

export default abstract class PlayerState extends State {

    protected parent: PlayerAI;
    protected owner: PlayerActor;

    public constructor(parent: PlayerAI, owner: PlayerActor) {
        super(parent);
        this.owner = owner;
    }

    public override onEnter(options: Record<string, any>): void {}
    public override onExit(): Record<string, any> { return {}; }
    public override update(deltaT: number): void {

        // Adjust the angle the player is facing 
        // this.parent.owner.rotation = this.parent.controller.rotation;
        // Move the player
        this.parent.owner.move(this.parent.controller.moveDir);

        // Handle the player trying to pick up an item
        if (this.parent.controller.pickingUp) {
            // Request an item from the scene
            this.emitter.fireEvent(ItemEvent.ITEM_REQUEST, {node: this.owner, inventory: this.owner.inventory});
        }

        // Handle the player trying to drop an item
        if (this.parent.controller.dropping) {
            // Place the healthpack on the ground which is the player's current position
            const item = this.owner.inventory.find(item => item instanceof Item) as Item | null;
            if (item !== null) {
                item.position.set(this.owner.position.x, this.owner.position.y);
                this.owner.inventory.remove(item.id);

                // Emit an event to make the item grow up
                this.emitter.fireEvent(ItemEvent.ITEM_GROW_UP, {item: item});
            }
        }

        if (this.parent.controller.useItem) {

        }
    }

    public override handleInput(event: GameEvent): void {
        switch(event.type) {
            default: {
                throw new Error(`Unhandled event of type ${event.type} caught in PlayerState!`);
            }
        }
    }

}

import Idle from "./Idle";
import Invincible from "./Invincible";
import Moving from "./Moving";
import Dead from "./Dead";
import PlayerActor from "../../../Actors/PlayerActor";
export { Idle, Invincible, Moving, Dead} 