/* PROGRESS=BAR*/
let count = 0;
let h = document.querySelector("#h4");
let progress = document.querySelector("#progress");
let text = document.querySelector("#text");
setInterval(function(){
    if (count<=99) {
      count++;
      progress.style.backgroundColor ="green";
      progress.style.width = `${count}% `;
      text.textContent = `${count} % `;
      h.style.color = "pink";
    }
},5000/100);


