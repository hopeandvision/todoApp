
function checkEvent(e){
	
	if (e.keyCode == 13){
		checkAndAdd.call(this);
	}
}

function addButtonClick(){

	checkAndAdd.call(getChildrenByTagName(this,"INPUT"));
}

function removeElem(e){

	if (e.target.tagName == "SPAN"){
		e.target.parentElement.remove()
	}
}

function checkAndAdd(e){

	if (this.value !== "" ){
		var inputVal = this.value;
		var closestToDoList = getChildrenByTagName(this,"UL");
		var listChild = closestToDoList.children[0]
		var li = document.createElement('li')
		li.innerHTML = inputVal + "<span class='removeElem'>  X</span>"

		closestToDoList.appendChild(li);
		this.value = "";
	}
};

function getChildrenByTagName(currentElem, elemTagName){

	var elemParent = currentElem.parentNode;
	var childrenNodes = elemParent.childNodes;
	var foundElem;

	for (var i = 0; i < childrenNodes.length; i++ ){
		if (childrenNodes[i].tagName == elemTagName){
			foundElem = childrenNodes[i];
			break;
		}
	}
	
	return foundElem;
}


var inputs = document.getElementsByClassName("todoText");
var addButons = document.getElementsByClassName("addButton");
var removeBtns = document.getElementsByClassName("removeElem");

addEvent("keydown", inputs, checkEvent);
addEvent("click", removeBtns, removeElem);
addEvent("click", addButons, addButtonClick);

function addEvent(eventType, elements, functionCall){
	for (var i = 0; i < elements.length; i++){
		elements[i].addEventListener(eventType, functionCall, false);
	}
}

document.addEventListener("click", removeElem);
