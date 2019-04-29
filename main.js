const cat1 = document.querySelector("#cat1-img");
let counter1 = 0;
const click1 = document.querySelector("#click1");
click1.textContent = counter1;
cat1.addEventListener("click", () => {
  counter1++;
  click1.textContent = counter1;
});

const cat2 = document.querySelector("#cat2-img");
let counter2 = 0;
const click2 = document.querySelector("#click2");
click2.textContent = counter2;
cat2.addEventListener("click", () => {
  counter2++;
  click2.textContent = counter2;
});