let containerE1 = document.querySelector('#portfolio__works');
let mixit = mixitup(containerE1, {
	classNames: {
	}
});

$(document).ready(function(){
	// form placeholder
	const formItems = document.querySelectorAll('.contacts__form-input');
	
	for(let item of formItems){
		const thisParent = item.closest('.contacts__form-item');
		const thisPlaceholder = thisParent.querySelector('.fake-placeholder');
		// Если инпут в фокусе		
		item.addEventListener('focus', function(){
			thisPlaceholder.classList.add('active');
		});

		// Если инпут теряет фокус
		item.addEventListener('blur', function(){

			if(item.value.length > 0){
				thisPlaceholder.classList.add('active');
			}
			else{
				thisPlaceholder.classList.remove('active');
			}
		})
	}
});

//FORM VALIDATE
	$('.contacts__form').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			subject: {
				required: true
			},
			comment: {
				required: true
			}
		},
		messages: {
			email: {
				required: 'Введите e-mail',
				email: 'отсутсвует символ @'
			},
			subject: {
				required: 'Введите тему сообщения'
			},
			comment: {
				required: 'Введите текст сообщения'
			}
		},
		submitHandler: function (form) {
			ajaxFormSubmit();
		}

	})

	// Функция AJAX запроса на сервер

	function ajaxFormSubmit() {

		let string = $(".contact__form").serialize();

		//Формируем ajax-запрос
		$.ajax({
			type: "POST",
			url: "php/mail.php", 
			data: string, 
			// Функция, если все прошло успешно
			success: function (html) {
				$(".contact__form").slideUp(800);
				$('#answer').html(html);
			}
		});
		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;	
}