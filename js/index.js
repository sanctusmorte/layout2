$(document).ready(function(){

	$('#reset_password').on('click', function(){
		$('#login').show();
		$('#password').show();
		$('#repit_password').show();
		$('#code_reset').hide();

		$('.registration_title').text('Восстановление пароля');
		$('#password').attr('placeholder', 'Новый пароль');
		$('#repit_password').show();
		$('.button_submit').text('Восстановить');
		$(this).hide();
		$('#back_to_login').show();
	});

	$('.button_submit').on('click', function(){
		$('.registration_title').text('Код восстановления был отправлен на ваш адрес');
		$('#login').hide();
		$('#password').hide();
		$('#repit_password').hide();
		$('#code_reset').show();
		$('#back_to_login').hide();

		$('.button_submit').text('Подтвердить').css('margin-bottom', '45px');
	});

	$('#back_to_login').on('click', function(){
		$('#login').show();
		$('#password').show();
		$('#repit_password').show();
		$('#code_reset').hide();

		$('.registration_title').text('TTG posm-db');
		$('#password').attr('placeholder', 'Пароль');
		$('#repit_password').hide();
		$('.button_submit').text('Войти');
		$(this).hide();
		$('#reset_password').show();
	});

});