function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("X e Y precisaram ser números");
  }
  return x + y;
}

try {
  console.log(soma(2, "2"));
} catch (error) {
  console.log(error);
}
