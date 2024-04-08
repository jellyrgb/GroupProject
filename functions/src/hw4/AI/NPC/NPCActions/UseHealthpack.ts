import GameEvent from "../../../../Wolfie2D/Events/GameEvent";
import Battler from "../../../GameSystems/BattleSystem/Battler";
import Healthpack from "../../../GameSystems/ItemSystem/Items/Healthpack";
import { TargetableEntity } from "../../../GameSystems/Targeting/TargetableEntity";
import NPCActor from "../../../Actors/NPCActor";
import NPCBehavior from "../NPCBehavior";
import NPCAction from "./NPCAction";
import Finder from "../../../GameSystems/Searching/Finder";
import BasicFinder from "../../../GameSystems/Searching/BasicFinder";


export default class UseHealthpack extends NPCAction {
    
    // The targeting strategy used for this GotoAction - determines how the target is selected basically
    protected override _targetFinder: Finder<Battler>;
    // The targets or Targetable entities 
    protected override _targets: Battler[];
    // The target we are going to set the actor to target
    protected override _target: Battler | null;

    public constructor(parent: NPCBehavior, actor: NPCActor) { 
        super(parent, actor);
    }

    public performAction(target: Battler): void {

        const healthpack = this.actor.inventory.find(item => item instanceof Healthpack) as Healthpack | null;

        if( healthpack != null && this.actor.inventory !== null && healthpack.inventory.id === this.actor.inventory.id) {
        
            this._target.health = Math.min(((target.health + healthpack.health), target.maxHealth)); // this make health can not over the max health
            // target is for the situation using healthpack to other NPC

            console.log("healthpack used")
            this.actor.inventory.remove(healthpack.id);
        } // prevent one healer keep using it to same ally

        this.finished();
    }
}