const insert = document.querySelector("#insert");
insert.addEventListener("click", () => {
function createCard(title, cName, views, monthsOld,  duration, thumbnail){
    let container = document.querySelector(".container");
    container.insertAdjacentHTML("afterbegin",
    `<div class="cardContainer">
        <div class="imageCard">
            <div class="videoLength">${duration}</div>
            <img src="${thumbnail}" alt = "thumbnail">
            </div>
           <div class="details">
            <div class="videoTitle">${title}</div>
            <div class="slag">${cName} . ${formatNumber(views)} views . ${monthsOld} months ago</div>
            </div>    
    </div>`)
}
function formatNumber(number){
    const units = ["","K","M","G"];
    let index = 0;
    const steps = 1000;
    while(Math.abs(number)>= steps&& index<units.length-1){
        number /=steps;
        index++;
    }
    return `${Math.floor(number*100)/100}${units[index]}`;
}

createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
  );
createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    5600000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
  );
createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    56000000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
  );
});
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});