function toDoShow(){
    let toDo = document.getElementById("ToDoMain");
    toDo.style.display="block";

    let proekti = document.querySelectorAll(".project")
    for(let i=0; i<proekti.length; i++)
    {
        if(proekti[i].classList.contains("aktiven"))
        {
            proekti[i].classList.remove("aktiven");
        }
    }
}


function showProject1(){
    let toDo = document.getElementById("ToDoMain");
    toDo.style.display="none";

    let proekti = document.querySelectorAll(".project")
    for(let i=0; i<proekti.length; i++)
    {
        if(proekti[i].classList.contains("aktiven"))
        {
            proekti[i].classList.remove("aktiven");
        }
    }
    
    let project1 = document.getElementById("Project1");
    project1.classList.add("aktiven");
}

function showProject2(){
    let toDo = document.getElementById("ToDoMain");
    toDo.style.display="none";

    let proekti = document.querySelectorAll(".project")
    for(let i=0; i<proekti.length; i++)
    {
        if(proekti[i].classList.contains("aktiven"))
        {
            proekti[i].classList.remove("aktiven");
        }
    }
    
    let project1 = document.getElementById("Project2");
    project1.classList.add("aktiven");
}


function showProject3(){
    let toDo = document.getElementById("ToDoMain");
    toDo.style.display="none";

    let proekti = document.querySelectorAll(".project")
    for(let i=0; i<proekti.length; i++)
    {
        if(proekti[i].classList.contains("aktiven"))
        {
            proekti[i].classList.remove("aktiven");
        }
    }
    
    let project3 = document.getElementById("Project3");
    project3.classList.add("aktiven");
}
