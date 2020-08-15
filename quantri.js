let table = document.getElementById("table");
table.addEventListener("click",function(e){
    if (e.target.classList.contains("tick")) {
        if(confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove()
        }
    }
});
