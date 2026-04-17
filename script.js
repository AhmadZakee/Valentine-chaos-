let btn = document.createElement("button");
btn.innerText = "Love me";
btn.style.background = "red";
btn.style.color = "white";
btn.style.padding = "5px";
btn.style.borderRadius = "10px";
btn.style.border = "solid white 10px";
btn.style.fontWeight = "900";
btn.style.cursor = "Pointer";
btn.style.marginTop = "3%";
btn.style.marginLeft = "43%";
btn.style.height = "12%";
btn.style.width = "10%";

let btn1 = document.createElement("button");
btn1.innerText = "Hate me";
btn1.style.background = "red";
btn1.style.color = "white";
btn1.style.padding = "5px";
btn1.style.marginLeft = "20px";
btn1.style.borderRadius = "10px";
btn1.style.border = "solid white 10px";
btn1.style.fontWeight = "900";
btn1.style.cursor = "Pointer";
btn1.style.height = "12%";
btn1.style.width = "10%";

btn1.addEventListener("click",() =>{
     btn.innerText = "No Plese 🥹"
     btn1.innerText = "Error"
})
document.body.append(btn);
btn.after(btn1);
btn.addEventListener("click",() =>{
     for(let i=1; i<=424 ;i++){
     document.body.innerText += " I-Love-You 💗 :)";
   }
     document.body.style.background =
    "linear-gradient(to bottom, #EB428A 50%, #2E4DB7 50%)";
});
let interval = setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";

  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (Math.random() * 2 + 2) + "s";

  document.body.append(h);

  setTimeout(() => h.remove(), 4000);
}, 120);

// remove all hearts on click
document.getElementById("btn").onclick = () => {
  clearInterval(interval);
  document.querySelectorAll(".heart").forEach(h => h.remove());
};