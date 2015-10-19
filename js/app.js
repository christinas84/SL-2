$(document).ready(function() {

	function addItem() {
		var newItem = $('#newItemTextBox').val();
		$('#list').append('<li><a href="#" class="remove">x</a> <span class="edit" contenteditable>'+ newItem +'</span></li>');
		$('#newItemTextBox').val('');
	}

	function removeItem() {
		var thisItem = $(this).parent();
		thisItem.remove();
	}

	// when we click the button, add an item
	$("#AddButton").click(function(e) {
		e.preventDefault();
		addItem();
	});

	// when we hit enter, add an item
	$("#newItemTextBox").keydown(function(event) {
		var keycode = event.keyCode ? event.keyCode : event.which;
		if(keycode == 13){
			addItem();
		}
	});

	// remove items
	// console.log($('.remove'));
	$('#list').on('click', '.remove', removeItem);

});



// add item to list


deleteButton = $('<span />').addClass('deleteButton').text('Delete');
$('ul#barcodesList li').append(deleteButton);