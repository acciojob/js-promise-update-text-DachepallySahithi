function getHelloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

getHelloWorld().then((message) => {
  const outputElement = document.getElementById("output");
  outputElement.textContent = message;
});
function getHelloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

getHelloWorld().then((message) => {
  const outputElement = document.getElementById("output");
  outputElement.textContent = message;
});
