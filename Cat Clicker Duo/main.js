const cat1 = {
  name: "Abby",
  picture: "cat1.jpg",
  clicks: 0
}
const cat2={
  name: "Bobby",
  picture: "cat2.jpg",
  clicks: 0
}

const cat1Container = document.querySelector("#cat1");
const cat2Container = document.querySelector("#cat2");

const cat1Name=document.createElement("h1");
cat1Name.textContent=cat1.name;
cat1Container.appendChild(cat1Name);

const cat2Name=document.createElement("h1");
cat2Name.textContent=cat2.name;
cat2Container.appendChild(cat2Name);

const cat1Image=document.createElement("img");
cat1Image.setAttribute("src",cat1.picture);
cat1Image.setAttribute("alt", "pic of cat");
cat1Container.appendChild(cat1Image);

const cat2Image=document.createElement("img");
cat2Image.setAttribute("src",cat2.picture);
cat2Image.setAttribute("alt", "pic of cat");
cat2Container.appendChild(cat2Image);

const cat1Counter = document.createElement("h1");
cat1Counter.textContent = `Clicks: ${cat1.clicks}`;
cat1Container.appendChild(cat1Counter);

const cat2Counter = document.createElement("h1");
cat2Counter.textContent = `Clicks: ${cat2.clicks}`;
cat2Container.appendChild(cat2Counter);

cat1Image.addEventListener("click", () => {
cat1.clicks++; 
cat1Counter.textContent = `Clicks: ${cat1.clicks}`;})

cat2Image.addEventListener("click", () => {
  cat2.clicks++; 
  cat2Counter.textContent = `Clicks: ${cat2.clicks}`;})
