const tableClass = ".custome__table";
const table = document.querySelectorAll(tableClass);
const hiddenTable = document.querySelector(".custome__table__hidden");
const arrow = document.querySelectorAll(".arrow")


for (let i = 0; i < table.length; i++) {
  table[i].addEventListener("click", function() {
    
    const panel = this.nextElementSibling;
    if (panel.className === "custome__table") {
     
      return;
    }
    arrow[i].classList.toggle("active")
    if (panel.style.display === "grid" ) {
      panel.style.display = "none";
    } else {
      panel.style.display = "grid";
    }
  });
}





// a.addEventListener("click", () => {
//   for (let i = 0; i < b.length; i++) {
//     if (b[i].style.display === "flex") {
//       b[i].style.display = "none"
//     } else {
//       b[i].style.display = "flex"
//     }
//   }
// });

// if (b.style.display === "block") {
//   b.style.display = "none";
// } else {
//   b.style.display = "block";
// }
// console.log("it works");