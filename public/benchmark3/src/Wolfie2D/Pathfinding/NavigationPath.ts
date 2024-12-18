import Stack from "../DataTypes/Collections/Stack";
import Path from "../DataTypes/Pathfinding/Path";
import Vec2 from "../DataTypes/Vec2";
import GameNode from "../Nodes/GameNode";

/**
 * A path that AIs can follow. Uses finishMove() in Physical to determine progress on the route
 */
export default class NavigationPath implements Path<Vec2> {
	/** The navigation path, stored as a stack of next positions */
	protected path: Stack<Vec2>;
	/** The current direction of movement */
	protected currentMoveDirection: Vec2;
	/** The distance a node must be to a point to consider it as having arrived */
	protected distanceThreshold: number;

	/**
	 * Constructs a new NavigationPath
	 * @param path The path of nodes to take
	 */
	constructor(path: Stack<Vec2>){
		this.path = path;
		this.currentMoveDirection = Vec2.ZERO;
		this.distanceThreshold = 5; // since the ai was stuck in wall, I increase the threshold.
	}

	/**
	 * Returns the status of navigation along this NavigationPath
	 * @returns True if the node has reached the end of the path, false otherwise
	 */
	isDone(): boolean {
		return this.path.isEmpty();
	}

    next(): Vec2 | null { return this.path.isEmpty() ? null : this.path.peek(); }

	/**
	 * Gets the movement direction in the current position along the path
	 * @param node The node to move along the path
	 * @returns The movement direction as a Vec2
	 */
	getMoveDirection(node: GameNode): Vec2 {
		// Return direction to next point in the nav
		//console.log("Direction: ", node.position.dirTo(this.path.peek()).x, node.position.dirTo(this.path.peek()).y)
		// check the dir is right
		return node.position.dirTo(this.path.peek());
	}

	/**
	 * Updates this NavigationPath to the current state of the GameNode
	 * @param node The node moving along the path
	 */
	handlePathProgress(node: GameNode): void {
		//console.log("this is peek " , this.path.peek());
		//console.log("this is  distance : ",  this.distanceThreshold*this.distanceThreshold)
		if(!this.path.isEmpty() && node.position.distanceSqTo(this.path.peek()) < this.distanceThreshold*this.distanceThreshold){
			this.path.pop();
		}
	}

	toString(): string {
		return this.path.toString()
	}
}