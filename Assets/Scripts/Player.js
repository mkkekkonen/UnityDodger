#pragma strict

public var YouDiedUI: GameObject;

private var animator: Animator;

private var speed: float = 4;
public static var alive: boolean;

var leftBound: float;
var rightBound: float;

function Start () {

	Screen.SetResolution(480, 640, false);

	animator = gameObject.GetComponent(Animator) as Animator;

	alive = true;

	if(YouDiedUI != null) {
		YouDiedUI.SetActive(false);
	}
}

function Update () {

	var axis = Input.GetAxis("Horizontal");

	Debug.Log("X coord: " + transform.position.x);

	var translation: float = axis * speed * Time.deltaTime;

	if(axis < 0 && transform.position.x + translation < leftBound) {
		transform.position.x = leftBound;
	}
	else if(axis > 0 && transform.position.x + translation > rightBound) {
		transform.position.x = rightBound;
	}
	else {
		transform.Translate(translation, 0, 0);
	}
}

function OnTriggerEnter2D(col: Collider2D) {

	if(YouDiedUI != null) {
		YouDiedUI.SetActive(true);
	}

	alive = false;
	animator.SetTrigger("Dead");

	yield WaitForSeconds(0.4);

	Destroy(gameObject);
}

public function SetLeftBound() {

	leftBound = transform.position.x;
}

public function SetRightBound() {

	rightBound = transform.position.x;
}