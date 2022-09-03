const heading = document.querySelector("#title");
const disc = document.querySelector("#desc");
const submitBtn = document.querySelector("#submit-btn");
let dueDate = document.querySelector("#dueDate")


// class NewTodo {    

//     constructor(title,desc){
//         this.title = title
//         this.desc = desc
//     }
// }

const makeList = () => {
    const listSection = document.querySelector(".list-section");

    let div = document.createElement("div");

    let h1 = document.createElement("p")
    h1.innerHTML = heading.value;

    let p = document.createElement("p")
    p.innerHTML = disc.value

    let date = document.createElement("p")
    date.innerHTML = dueDate.value

    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "delete"
    deleteBtn.addEventListener("click",()=>{
        div.style.display = "none"
    })

    let doneBtn = document.createElement("button")
    doneBtn.innerText = "Done"
    doneBtn.addEventListener("click",()=>{
        div.style.border = "5px solid green"
    })


   
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(date);
    div.appendChild(deleteBtn);
    div.appendChild(doneBtn);

    div.classList.add("todos");
    
    listSection.appendChild(div);
}
submitBtn.addEventListener("click",makeList)
// let todo = new NewTodo(heading.value, disc.value )

// console.log(todo)
