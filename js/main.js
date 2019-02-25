var link = document.querySelector(".order-button");
var popup = document.querySelector(".modal-order");

var dateEnter = document.querySelector("[name=dateEnter]");
var dateOut = document.querySelector("[name=dateOut]");
var adultsBtn = document.querySelector(".minus");
var form = document.querySelector("form");

var isStorageSupport = true;
var storageEnter = "";
var storageOut = "";

try {
	storageEnter = localStorage.getItem("dateEnter");
	storageOut = localStorage.getItem("dateOut");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
	popup.classList.remove("modal-error");

	if(storageEnter || storageOut) {
		dateEnter.value = storageEnter;
		dateOut.value = storageOut;
		adultsBtn.focus();
	} else {
		dateEnter.focus();
	}
});

form.addEventListener("submit", function(evt) {
	if (!dateEnter.value || !dateOut.value) {
	evt.preventDefault();
	popup.classList.remove("modal-error"); // добавили хак для валидации формы и вызова анимации
	popup.offsetWidth = popup.offsetWidth; // добавили хак для валидации формы и вызова анимации
	
	popup.classList.add("modal-error");
	} else {
		localStorage.setItem("dateEnter", dateEnter.value);
		localStorage.setItem("dateOut", dateOut.value);
	}
});

window.addEventListener("keydown", function (evt) {
	if(evt.keyCode === 27) {
		if(popup.classList.contains("modal-show")) {
			evt.preventDefault();

			popup.classList.remove("modal-show");
		}
	}
});