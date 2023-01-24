let addClass=document.querySelector(".classes-to-add");
let removeClass=document.querySelector(".classes-to-remove");
let myCurrentTarget=document.querySelector(".current");
myLocalArray=[];
if(localStorage.classList) {
    let myLocalArray=JSON.parse(localStorage.classList);
    showElement(myLocalArray);
}
function showElement(arr) {
    arr.forEach(el=> {
        createElement(el);
    })
}
function addElement(element) {
    myLocalArray.push(element);
    localStorage.classList=JSON.stringify(myLocalArray)
}
function deleteElement (element) {
    myLocalArray=myLocalArray.filter(el=> {
        return el!=element
    })
    localStorage.classList=JSON.stringify(myLocalArray)
}
//Create ELEMENT
function createElement(element) {
    let mySpan=document.createElement("span");
    mySpan.appendChild(document.createTextNode(`${element}`));
    mySpan.setAttribute("data-class",`${element}`)
    let myRes=document.querySelector(".classes-list div");
    myRes.appendChild(mySpan);
}
//Add Element
myCurrentTarget.addEventListener("click", e=> {
    if (addClass.value!="") {
        let myClassesList=addClass.value.split(" ");
        myClassesList.forEach(element => {
            if(element!="") {
                addElement(element)
                createElement(element)
            }
            
        });
       
    }
    addClass.value=""
});
//Delete Element
myCurrentTarget.addEventListener("click", e=> {
    let myAddedClasses=document.querySelectorAll(".classes-list div span");
    let myRemoveList=removeClass.value.split(" ");
    myAddedClasses.forEach(el=> {
        myRemoveList.forEach(element=> {
            if (el.getAttribute("data-class")==element) {
                deleteElement(element);
                el.remove();
            }
        })
    })
    removeClass.value=""
});

