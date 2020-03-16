
const MENU= document.getElementById('head-menu');
const GALLERY= document.getElementById('gall');
const GALLERYIMG= document.getElementById('gallery_img');
const IMAGECLICK= document.getElementById('gallery_img');
const BUTTON_SUBMIT = document.getElementById("button_submit");
const BUTTON= document.getElementById("send_button");
const CLOSE_BUTTON= document.getElementById("close_button");
const FOOTER= document.getElementById('footerid');

//Активные элементы шапки
MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
	FOOTER.classList.remove('footer_wrap');
	event.target.classList.add('active');
	if (event.target.classList.contains('contacts_link')){
		FOOTER.classList.add('footer_wrap');
	} 
});

//Нажатие кнопок в секции портфолио
GALLERY.addEventListener('click',(event) => {
  GALLERY.querySelectorAll('button').forEach (el => el.classList.remove('active_button'));
  event.target.classList.add('active_button');
  if (event.target.classList.contains('gallery_filter_web')){ 
    GALLERYIMG.querySelectorAll('div.graphic_design, div.artwork').forEach (el =>  el.style.display= 'none');
    GALLERYIMG.querySelectorAll('div.web_design').forEach (el =>  el.style.display= 'block');
  }
  else if (event.target.classList.contains('gallery_filter_graph')){ 
    GALLERYIMG.querySelectorAll('div.web_design, div.artwork').forEach (el =>  el.style.display= 'none');
    GALLERYIMG.querySelectorAll('div.graphic_design').forEach (el =>  el.style.display= 'block');
  }
  else if (event.target.classList.contains('gallery_filter_art')){ 
    GALLERYIMG.querySelectorAll('div.web_design, div.graphic_design').forEach (el =>  el.style.display= 'none');
    GALLERYIMG.querySelectorAll('div.artwork').forEach (el =>  el.style.display= 'block');
  }
  else if (event.target.classList.contains('gallery_filter_all')){ 
    GALLERYIMG.querySelectorAll('div.artwork, div.web_design, div.graphic_design').forEach (el =>  el.style.display= 'block');
  }
});

//Нажатие на рисунок в портфолио
IMAGECLICK.addEventListener('click', (event) => {
  //IMAGECLICK.querySelectorAll('img').forEach(el => el.classList.remove('clicked_img'));
	if ((event.target.className =='img') &&( !event.target.classList.contains('clicked_img'))) {
		IMAGECLICK.querySelectorAll('img').forEach(el => el.classList.remove('clicked_img'));
		event.target.classList.add('clicked_img');
	}
	else {
		IMAGECLICK.querySelectorAll('img').forEach(el => el.classList.remove('clicked_img'));
		event.target.classList.remove('clicked_img');
	}
});

BUTTON_SUBMIT.addEventListener('submit', (e) => {
	e.preventDefault();
	return false;
});

//Нажатие на кнопку отправить(SEND)
BUTTON.addEventListener('click', (e) => {
	if (document.getElementById('name_input').checkValidity() && document.getElementById('email_input').checkValidity()) {
			e.preventDefault();
			const theme= document.getElementById('theme_input').value.toString();
			const describe= document.getElementById('describe_input').value.toString();
			document.getElementById('textm').innerText = 'Письмо отправлено';
			if (theme!== '') {
					document.getElementById('theme').innerText= 'Тема: ' + theme;
			}
			else { document.getElementById('theme').innerText= 'Без темы'; }
			if (describe!== '') {
					document.getElementById('describem').innerText= 'Описание: ' + describe;
			}
			else { document.getElementById('describem').innerText= 'Без описания'; }
			document.getElementsByTagName('body')[0].classList.remove('hide');
			document.getElementById('message_box').classList.remove('invisible_mes');
			document.getElementById('message_block').classList.remove('invisible_mes');
	}
});

CLOSE_BUTTON.addEventListener('click', () => {
	document.getElementById('textm').innerText = '';
	document.getElementById('theme').innerText = '';
	document.getElementById('describem').innerText = '';
	document.getElementsByTagName('body')[0].classList.remove('hide');
	document.getElementById('message_box').classList.add('invisible_mes');
	document.getElementById('message_block').classList.add('invisible_mes');
});