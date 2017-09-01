#pragma strict

private var rate: int;
private var rocksPassed: int;
private var rockArr: Array;

var rocksText: UnityEngine.UI.Text;

var initializerRock: GameObject;
var spawnY: float;
var leftBound: float;
var rightBound: float;
var lowerBound: float;

var rock1: GameObject;
var rock2: GameObject;
var rock3: GameObject;
var rock4: GameObject;
var rock5: GameObject;
var rock6: GameObject;

function Start () {

	rate = 1;
	rocksPassed = 0;

	rockArr = new Array();
}

function Update () {

	var random: int = Random.Range(1, 60);

	if(random <= rate) {
		SpawnRock();
	}

	for(var i: int = 0; i < rockArr.length; i++) {
		if(rockArr[i] != null) {
			var rock = rockArr[i] as GameObject;
			if(rock.transform.position.y < lowerBound) {
				Destroy(rock);
				if(Player.alive) {
					rocksPassed++;
					if(rocksText != null) {
						rocksText.text = "Rocks: " + rocksPassed;
					}
				}
			}
		}
	}
}

public function SetLowerBound() {

	if(initializerRock != null) {
		lowerBound = initializerRock.transform.position.y;
	}
}

public function SetLeftBound() {

	if(initializerRock != null) {
		leftBound = initializerRock.transform.position.x;
	}
}

public function SetRightBound() {

	if(initializerRock != null) {
		rightBound = initializerRock.transform.position.x;
	}
}

public function SetSpawnY() {

	if(initializerRock != null) {
		spawnY = initializerRock.transform.position.y;
	}
}

private function SpawnRock() {

	var random = Random.Range(0, 6);

	switch(random) {
		case 0:
			InstantiateRock(rock1);
			break;
		case 1:
			InstantiateRock(rock2);
			break;
		case 2:
			InstantiateRock(rock3);
			break;
		case 3:
			InstantiateRock(rock4);
			break;
		case 4:
			InstantiateRock(rock5);
			break;
		case 5:
			InstantiateRock(rock6);
			break;
	}
}

private function InstantiateRock(prototype: GameObject) {

	var go: GameObject = GameObject.Instantiate(prototype);
	go.transform.position = CreateRandomPos();
	rockArr.push(go);
}

private function CreateRandomPos() {

	var vector: Vector3 = new Vector3();

	vector.x = Random.Range(leftBound, rightBound);
	vector.y = spawnY;
	vector.z = 0;

	return vector;
}