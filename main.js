(function() {

	// init tooltips
	$('[data-toggle="tooltip"]').tooltip()

	$(document).off("click", ".addButton");
	$(document).on("click", ".addButton", function () {

		var listInstance = $(this).parent();
		var itemToAdd = listInstance.children(".todoText");
		var list = listInstance.children(".todoList");

		toggleValidationMessage(itemToAdd);
		addItemToList(list, itemToAdd);
	});

	$(document).off("click", ".removeElem");
	$(document).on("click", ".removeElem", function(){
		$(this).parent().remove();
	});

	var validateItem = function (item) {
		return item == "" ? true : false;
	};

	var toggleValidationMessage = function (item) {
		item.val() == "" ? item.tooltip('show') : item.tooltip('hide');
	}

	function addItemToList (list, item) {

		if (validateItem(item.val())) return;

		list.append("<li>" + item.val() + "<span class='removeElem'> X</span> </li>")
		item.val('');
	}

})();