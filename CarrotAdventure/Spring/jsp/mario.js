final int screenWidth= 1300;
final int screenHeight= 800;

void initialize(){
	addScrenn("level", new MarioLevel(width, height));
}

class MarioLevel Extends Level{
	MarioLevel(float levelWidth, float levelHeight){
	super(levelWidth, levelHeight);
	addLevelLayer("layer", new MarioLayer(this));
	}
}
class MarioLayer extends LevelLayer{
	MarioLayer(Level owner){
	super(owner);
	setBackgroundColor(color(0, 100, 190));
	addBoundary(new Boundary(0, height-48, width, height-48));
	showBoundaries=true;
	}
}