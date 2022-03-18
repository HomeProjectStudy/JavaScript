function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("X e Y precisaram ser números");
  }
  return x + y;
}

try {
  console.log(soma(2, 2));
} catch (error) {
  console.log(error);
}

// 3 parte do tryCatch

function getHours(data) {
  if (!(data instanceof Date)) {
    throw new TypeError("Esperando instancia de Date.");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

console.log(getHours(new Date()));
