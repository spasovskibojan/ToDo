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
    let pros = document.querySelectorAll(".actives");
    for(let i=0; i<pros.length; i++)
    {
        if(pros[i].classList.contains("actives"))
        {
            pros[i].classList.remove("actives");
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

    let pros = document.querySelectorAll(".actives");
    for(let i=0; i<pros.length; i++)
    {
        if(pros[i].classList.contains("actives"))
        {
            pros[i].classList.remove("actives");
        }
    }
    
    let project1 = document.getElementById("Project1");
    project1.classList.add("aktiven");
    let pro1 = document.querySelector(".pro1");
    pro1.classList.add("actives");
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
    
    let pros = document.querySelectorAll(".actives");
    for(let i=0; i<pros.length; i++)
    {
        if(pros[i].classList.contains("actives"))
        {
            pros[i].classList.remove("actives");
        }
    }

    let project1 = document.getElementById("Project2");
    project1.classList.add("aktiven");
    let pro2 = document.querySelector(".pro2");
    pro2.classList.add("actives");
}


function showProject3(){
    let toDo = document.getElementById("ToDoMain");
    toDo.style.display="none";

    let proekti = document.querySelectorAll(".project");
    for(let i=0; i<proekti.length; i++)
    {
        if(proekti[i].classList.contains("aktiven"))
        {
            proekti[i].classList.remove("aktiven");
        }
    }
    


    let pros = document.querySelectorAll(".actives");
    for(let i=0; i<pros.length; i++)
    {
        if(pros[i].classList.contains("actives"))
        {
            pros[i].classList.remove("actives");
        }
    }
    let project3 = document.getElementById("Project3");
    project3.classList.add("aktiven");
    let pro3 = document.querySelector(".pro3");
    pro3.classList.add("actives");
}

