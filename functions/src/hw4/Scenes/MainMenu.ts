import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import { UIElementType } from "../../Wolfie2D/Nodes/UIElements/UIElementTypes";
import Layer from "../../Wolfie2D/Scene/Layer";
import Scene from "../../Wolfie2D/Scene/Scene";
import Color from "../../Wolfie2D/Utils/Color";
import Label from "../../Wolfie2D/Nodes/UIElements/Label";
import MainHW4Scene from "./MainHW4Scene";
import GameEvent from "../../Wolfie2D/Events/GameEvent";
import Input from "../../Wolfie2D/Input/Input";
import Button from "../../Wolfie2D/Nodes/UIElements/Button";

export default class MainMenu extends Scene {
    // Layers, for multiple main menu screens
    private splash: Layer;
    private mainMenu: Layer;
    private controls: Layer;
    private help: Layer;


    public loadScene(){

        this.load.image("logo", "hw4_assets/sprites/LOGO.png");
        this.load.image("title", "hw4_assets/sprites/TITLE.png");
        this.load.image("splash", "hw4_assets/sprites/splash.png");
        this.load.image("backgroundImage", "hw4_assets/sprites/Background.png");
    }

    public startScene(){
        const center = this.viewport.getCenter();

        // Splash screen
        this.splash = this.addUILayer("splash");
        const backphoto = this.add.sprite("splash", "splash");
        backphoto.position.set(center.x, center.y)
        
        const splashLogo = this.add.sprite("logo", "splash");
        splashLogo.position.set(center.x, center.y - 400);

        const splashTitle = this.add.sprite("title", "splash");
        splashTitle.position.set(center.x, center.y - 330);

        const splashintext = "Touch To Start"
        const splashTetxt = <Label>this.add.uiElement(UIElementType.LABEL, "splash", {position: new Vec2(center.x, center.y + 300), text: splashintext});
        splashTetxt.fontSize = 35;
        

        // main menu
        this.mainMenu = this.addUILayer("mainMenu");
        this.mainMenu.setHidden(true);

        const photo = this.add.sprite("backgroundImage", "mainMenu");
        photo.position.set(center.x, center.y);

        const logo = this.add.sprite("logo", "mainMenu");
        logo.position.set(center.x, center.y - 400);

        const title = this.add.sprite("title", "mainMenu");
        title.position.set(center.x, center.y - 330);


        const play = this.add.uiElement(UIElementType.BUTTON, "mainMenu", {position: new Vec2(center.x, center.y - 180), text: "GAME START"});
        (play as Label).setTextColor(new Color(0, 128, 255));
        play.size.set(300, 100);
        play.borderWidth = 0;
        play.backgroundColor = Color.TRANSPARENT;
        play.onClickEventId = "play";
        

        // Add controls button
        const controls = this.add.uiElement(UIElementType.BUTTON, "mainMenu", {position: new Vec2(center.x, center.y + 20), text: "Controls"});
        (controls as Label).setTextColor(new Color(0, 128, 255));
        controls.size.set(200, 50);
        controls.borderWidth = 0;
        controls.backgroundColor = Color.TRANSPARENT;
        controls.onClickEventId = "control";

        const help = this.add.uiElement(UIElementType.BUTTON, "mainMenu", {position: new Vec2(center.x, center.y + 220), text: "HELP"});
        (help as Label).setTextColor(new Color(0, 128, 255));
        help.size.set(200, 50);
        help.borderWidth = 0;
        help.backgroundColor = Color.TRANSPARENT;
        help.onClickEventId = "help";

        // Controls screen
        this.controls = this.addUILayer("controls");
        this.controls.setHidden(true);

        const controlPhoto = this.add.sprite("backgroundImage", "controls");
        controlPhoto.position.set(center.x, center.y);

        const header = <Label>this.add.uiElement(UIElementType.LABEL, "controls", {position: new Vec2(center.x, center.y - 250), text: "CONTROL"});
        header.textColor = Color.GREEN;

        const w = <Label>this.add.uiElement(UIElementType.LABEL, "controls", {position: new Vec2(center.x, center.y - 150), text: "W : Move Up"});
        const s = <Label>this.add.uiElement(UIElementType.LABEL, "controls", {position: new Vec2(center.x, center.y - 100), text: "S : Move Down"});
        const a = <Label>this.add.uiElement(UIElementType.LABEL, "controls", {position: new Vec2(center.x, center.y - 50), text: "A : Move Left"});
        const d = <Label>this.add.uiElement(UIElementType.LABEL, "controls", {position: new Vec2(center.x, center.y ), text: "D : Move Right"});
        const q = <Label>this.add.uiElement(UIElementType.LABEL, "controls", {position: new Vec2(center.x, center.y + 50 ), text: "Q : Pickup Item"});
        const e = <Label>this.add.uiElement(UIElementType.LABEL, "controls", {position: new Vec2(center.x, center.y + 100), text: "E : Use Item"});
        w.textColor = (new Color(0, 128, 255));
        s.textColor = (new Color(0, 128, 255));
        a.textColor = (new Color(0, 128, 255));
        d.textColor = (new Color(0, 128, 255));
        q.textColor = (new Color(0, 128, 255));
        e.textColor = (new Color(0, 128, 255));


        const back = this.add.uiElement(UIElementType.BUTTON, "controls", {position: new Vec2(center.x, center.y + 250), text: "Back"});
        back.size.set(200, 100);
        back.backgroundColor = Color.TRANSPARENT;
        back.onClickEventId = "menu";


        // About screen
        this.help = this.addUILayer("help");
        this.help.setHidden(true);


        const helpPhoto = this.add.sprite("backgroundImage", "help");
        helpPhoto.position.set(center.x, center.y);

        const helpHeader = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y - 470), text: "Story"});
        helpHeader.textColor = Color.GREEN;

        const text1 = "One day, strange things began happening around a peaceful village,";
        const text2 = "accompanied by unusual sounds from the forest behind it. New, ";
        const text3 = "unidentified types of insects ravaging crops and damaging farms.";
        const text4 = "These insects seemed to possess mysterious energy, becoming larger";
        const text5 = "and more menacing under the moonlight. Kevin decided to transform";
        const text6 = "the harvested crops into defense towers to protect the village.";
        const text7 = "Will Kevin be able to protect his farm and village ?";

        const line1 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y - 420), text: text1});
        const line2 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y - 370), text: text2});
        const line3 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y - 320), text: text3});
        const line4 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y - 270), text: text4});
        const line5 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y - 220), text: text5});
        const line6 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y - 170), text: text6});
        const line7 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y - 120), text: text7});

        line1.textColor = (new Color(0, 128, 255));; line1.fontSize=22;line2.textColor = (new Color(0, 128, 255));; line2.fontSize=22;
        line3.textColor = (new Color(0, 128, 255));; line3.fontSize=22;line4.textColor = (new Color(0, 128, 255));; line4.fontSize=22;
        line5.textColor = (new Color(0, 128, 255));; line5.fontSize=22;line6.textColor = (new Color(0, 128, 255));; line6.fontSize=22;
        line7.textColor = (new Color(0, 128, 255));; line7.fontSize=22;


        const DevelopmentTeam = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y - 30), text: "Development Team"});
        DevelopmentTeam.textColor = Color.GREEN;

        const name1 = "eveloped by Taeyoung Kim, Hyomin Kim, Minwoo Son"
        const nameline1 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y + 30), text: name1});
        nameline1.textColor = (new Color(0, 128, 255));nameline1.fontSize = 24;


        const Cheat = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y + 90), text: "Cheat Code"});
        Cheat.textColor = Color.GREEN;

        const cheat1 = "SHOWMETHEMONEY : Money Max"
        const cheat2 = "ATTACK : Damage Max"
        const cheat3 = "IMNOTHURT : Defense Max"
        const cheat4 = "UNlOCK : Unlock all levels"

        const cheatname1 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y + 140), text: cheat1});
        const cheatname2 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y + 180), text: cheat2});
        const cheatname3 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y + 210), text: cheat3});
        const cheatname4 = <Label>this.add.uiElement(UIElementType.LABEL, "help", {position: new Vec2(center.x, center.y + 260), text: cheat4});
        cheatname1.textColor = (new Color(0, 128, 255)); cheatname1.fontSize = 24;
        cheatname2.textColor = (new Color(0, 128, 255)); cheatname2.fontSize = 24;
        cheatname3.textColor = (new Color(0, 128, 255)); cheatname3.fontSize = 24;
        cheatname4.textColor = (new Color(0, 128, 255)); cheatname4.fontSize = 24;

        


        const helpBack = this.add.uiElement(UIElementType.BUTTON, "help", {position: new Vec2(center.x, center.y + 420), text: "Back"});
        helpBack.size.set(200, 100);
        helpBack.backgroundColor = Color.TRANSPARENT;
        helpBack.onClickEventId = "menu";


        
        // Subscribe to the button events
        this.receiver.subscribe("play");
        this.receiver.subscribe("control");
        this.receiver.subscribe("help");
        this.receiver.subscribe("menu");
        this.receiver.subscribe("click");

    }

    

    public updateScene(deltaT : number){
        if (Input.isMouseJustPressed() && this.splash.isHidden() == false) {
            this.splash.setHidden(true);
            this.mainMenu.setHidden(false);
        }
        
        while(this.receiver.hasNextEvent()){
            this.handleEvent(this.receiver.getNextEvent());
        }
    }

    public handleEvent(event: GameEvent): void {
        switch(event.type) {
            case "play": {
                this.sceneManager.changeToScene(MainHW4Scene);
                break;
            }
            case "control": {
                this.mainMenu.setHidden(true);
                this.controls.setHidden(false);
                break;
            }
            case "help": {
                this.mainMenu.setHidden(true);
                this.help.setHidden(false);
                break;
            }
            case "menu": {
                this.controls.setHidden(true);
                this.help.setHidden(true);
                this.mainMenu.setHidden(false);
                break;
            }
        }
    }
}