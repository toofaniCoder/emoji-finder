// hard coded icons data
let icons = [
    {icon: "fas fa-grin-hearts", name: "hearts"},
    {icon: "far fa-grin-hearts", name: "hearts"},
    {icon: "fas fa-grin-squint", name: "squint"},
    {icon: "far fa-grin-squint", name: "squint"},
    {icon: "fas fa-grin-squint-tears", name: "tears"},
    {icon: "far fa-grin-squint-tears", name: "tears"},
    {icon: "fas fa-grin-stars", name: "stars"},
    {icon: "far fa-grin-stars", name: "stars"},
    {icon: "fas fa-grin-tears", name: "tears"},
    {icon: "far fa-grin-tears", name: "tears"},
    {icon: "fas fa-grin-tongue", name: "tounge"},
    {icon: "far fa-grin-tongue", name: "tounge"},
    {icon: "fas fa-grin-tongue-squint", name: "tounge"},
    {icon: "far fa-grin-tongue-squint", name: "tounge"},
    {icon: "fas fa-grin-tongue-wink", name: "tounge"},
    {icon: "far fa-grin-tongue-wink", name: "tounge"},
    {icon: "fas fa-kiss", name: "kiss"},
    {icon: "far fa-kiss", name: "kiss"},
    {icon: "fas fa-kiss-beam", name: "kiss"},
    {icon: "far fa-kiss-beam", name: "kiss"},
    {icon: "fas fa-kiss-wink-heart", name: "kiss"},
    {icon: "far fa-kiss-wink-heart", name: "kiss"},
    {icon: "fas fa-laugh-squint", name: "laugh"},
    {icon: "far fa-laugh-beam", name: "laugh"},
    {icon: "far fa-laugh", name: "laugh"},
]

 // function for load data   
function loadIcons(searchValue = "") {
var el = document.querySelector(".emoji-container");
 var innerData = "";
    icons.forEach(function(item){
        if(item.name.includes(searchValue)) {
        innerData +=`
        <div>
        <i class="${item.icon}"></i>
        <p>${item.icon}</p>
        </div>`;   
        }
      
    });

    el.innerHTML = innerData;
}
function searchIcon(val) {
loadIcons(val)
}

loadIcons()