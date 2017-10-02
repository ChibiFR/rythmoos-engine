import {IUpdatable} from './IUpdatable';
import {IRenderable} from './IRenderable';

/**
 * A game object defines an entity in your game's world.<br>
 * It can be for example the player's character, a button, etc.
 */
export class GameObject implements IUpdatable, IRenderable {
  constructor() {
    this.create();
  }

  /**
   * Called when the game object is created.<br>
   * You can set the game object's properties in here, use the loader
   * to load textures, etc...
   */
  public create(): void {
  }

  /**
   * Called every frame as long as the game object is in the active scene.<br>
   * You can update your object property from here to, for example, move a
   * character if a keyboard key is being pressed.
   */
  public update(): void {
  }

  /**
   * Called every frame as long as the game object is in the active scene.<br>
   * Render the game object to the screen using the renderer's 2D context.
   * @param context The renderer's context, automatically passed in.
   */
  public render(context: CanvasRenderingContext2D): void {
  }
}
