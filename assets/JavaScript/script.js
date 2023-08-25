window.addEventListener("scroll", () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset;
  let navbar = document.querySelector(".navbar");
  if (verticalScrollPx > 50) {
    navbar.style.backgroundColor = "#212529";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

let portfolioCards = document.querySelectorAll(".plus")
portfolioCards.forEach(card=>{
  card.addEventListener("click",function(e){
    console.log(e.target.parentNode.parentNode.lastElementChild);
    if (e.target.parentNode.parentNode.lastElementChild.className=="portfolio-card-detail close") {
      e.target.parentNode.parentNode.lastElementChild.className = "portfolio-card-detail"
    }
  })
})

let closeTabs = document.querySelectorAll(".portfolio-card-detail-close a")
closeTabs.forEach(item=>{
  item.addEventListener("click",function(e){
    e.preventDefault()
    console.log(e.target.parentNode.parentNode);
    e.target.parentNode.parentNode.classList.add("close");
  })
}) 