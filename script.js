// const num = 4
// const set = localStorage.setItem('num', num.toString());
// const get = localStorage.getItem('num')
// console.log(get);

// const student = {
//     name: 'Muhammad',
//     age: 17,
// }
/*JSONGA otqazvoti*/
// const json = JSON.stringify(student)
/*JSONdan ovoti*/
// const json = JSON.parse(student)
// const setToLS = localStorage.setItem('json', json.toString())


const addValue = document.querySelector(".firstIpt")
const addBtn = document.querySelector(".Add__btn")
const ClearBtn = document.querySelector(".clear__btn")
const elForm = document.querySelector(".form")

addBtn.addEventListener("click", function Firts(evt) {
    evt.preventDefault()
    if(addValue.value.trim() !=0 ){
        let localItems = JSON.parse(localStorage.getItem('localItems'))
        if(localItems === null ){
            taskList =[]
        } else{
            taskList = localItems;
        }
        taskList.push(addValue.value)
        localStorage.setItem('localItems', JSON.stringify(taskList))
        addValue.value =''
        showItem()
    }
})

function showItem() {
    let getItem1 = JSON.parse(localStorage.getItem('localItems'))
    if (getItem1 === null) {
        taskList = []
    
} else{
    taskList = getItem1
}
let UI = '';
let showUI = document.querySelector('.todo__list')
taskList.map((task, params) => {
    UI += `<li>
    ${task}
    <span>
    <input class ="check" type="checkbox">
    <button class= "deletetask" onclick = "deleteItem(${params})">-</button> 
    </span>
    </li>
    `
}
)
showUI.innerHTML = UI;
}
function deleteItem(params) {
    let localItems = JSON.parse(localStorage.getItem('localItems'))
    taskList.splice(params, 1)
    localStorage.setItem('localItems', JSON.stringify(taskList));
    showItem()

}
ClearBtn.addEventListener("click", function(){
    localStorage.clear()
    window.location.reload()
})

const inputCheck= documnet.querySelector(".check")
function Checked() {
    if (inputCheck == true) {
        alert("good")
    }
}
