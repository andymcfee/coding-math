var v1 = vector.create(10, 5),
    v2 = vector.create( 3, 4),
    v3 = v1.add(v2);

console.log(v3.getX());
console.log(v3.getY());

console.log("v1 length = " + v1.getLength());
console.log("v1 * 5 length = " + v1.multiply(5).getLength());

