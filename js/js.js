let icon = document.querySelectorAll(".icon-link");
    for(var i=0 ; i <icon.length ; i++){
        icon[i].addEventListener("click" , (e)=>{
            let arrowparent = e.target.parentElement.parentElement;
            arrowparent.classList.toggle("showMenu");
        });
    }


let sidebar = document.querySelector(".sidebar");
 let sidebarbtn = document.querySelector(".elso");
 sidebarbtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
  });