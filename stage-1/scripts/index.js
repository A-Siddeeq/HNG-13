const timeElement = document.getElementById("time");
const updateTime = () => {
  timeElement.textContent = `Current time: ${Date.now()} ms`;
};
updateTime();
setInterval(updateTime, 1000);
