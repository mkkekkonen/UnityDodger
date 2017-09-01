#pragma strict

private var rotationSpeed: float;
private var speed: float;

function Start () {

	rotationSpeed = Random.Range(-20, 20);
	speed = Random.Range(-7, -3);
}

function Update () {

	var rotation: float = rotationSpeed * Time.deltaTime;
	var translation: float = speed * Time.deltaTime;

	var col: PolygonCollider2D = gameObject.GetComponent(PolygonCollider2D) as PolygonCollider2D;

	transform.Rotate(0, 0, rotation, Space.Self);
	transform.position.y += translation;
}