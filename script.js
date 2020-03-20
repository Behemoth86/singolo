
const MENU= document.getElementById('head-menu');
const GALLERY= document.getElementById('gall');
const GALLERYIMG= document.getElementById('gallery_img');
const IMAGECLICK= document.getElementById('gallery_img');
const BUTTON_SUBMIT = document.getElementById("button_submit");
const BUTTON= document.getElementById("send_button");
const CLOSE_BUTTON= document.getElementById("close_button");
const FOOTER= document.getElementById('footerid');
const SLIDER_BACK = document.getElementById("slider_back");
const SLIDES = document.getElementsByClassName("slide");


function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this), ms);
  }
}


//Активные элементы шапки
MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
	FOOTER.classList.remove('footer_wrap');
	event.target.classList.add('active');
	if (event.target.classList.contains('contacts_link')){
		FOOTER.classList.add('footer_wrap');
	} 
});

//Работа со слайдером
var slideIndex = 1; //устанавливает текущий слайд 1

function plusSlide() {
	showSlides(slideIndex += 1,'right');
}

function minusSlide() {
  showSlides(slideIndex -= 1,'left');  
}

//Показ слайдов
function showSlides(n, direction) {
  var i;
  if (n > SLIDES.length) {
		slideIndex = 1;
  }
  if (n < 1) {
      slideIndex = SLIDES.length;
  }
	document.getElementById('slide1').classList.remove('slide_right');
	document.getElementById('slide1').classList.remove('slide_left');
	document.getElementById('slide2').classList.remove('slide_right');
	document.getElementById('slide2').classList.remove('slide_left');

	if (direction=='right'){
	  document.getElementById('slide1').classList.add('slide_right');
		document.getElementById('slide2').classList.add('slide_right');

	}
	else if (direction=='left'){
		document.getElementById('slide1').classList.add('slide_left');
		document.getElementById('slide2').classList.add('slide_left');
	}			
	for (i = 0; i < SLIDES.length; i++) {	
		SLIDES[i].style.display = "none";	
	}
		SLIDES[slideIndex - 1].style.display = "flex";
	
	if (slideIndex%2==0){SLIDER_BACK.classList.add('slide_blue');}
	else {SLIDER_BACK.classList.remove('slide_blue');}
}

//Нажатие кнопок телефона в слайдере
  document.getElementById('iphone_button1').addEventListener('click', () => {
	  if (document.getElementById('pdisplay1').classList.contains('invisible')==false){
			document.getElementById('pdisplay1').classList.add('invisible');
		}
		else{
			document.getElementById('pdisplay1').classList.remove('invisible');
		}
	});	
  document.getElementById('iphone_button2').addEventListener('click', () => {
	  if (document.getElementById('pdisplay2').classList.contains('invisible')==false){
			document.getElementById('pdisplay2').classList.add('invisible');
		}
		else{
			document.getElementById('pdisplay2').classList.remove('invisible');
		}
  });
  document.getElementById('iphone_button3').addEventListener('click', () => {
	  if (document.getElementById('pdisplay3').classList.contains('invisible')==false){
			document.getElementById('pdisplay3').classList.add('invisible');
		}
		else{
			document.getElementById('pdisplay3').classList.remove('invisible');
		}
	});  
  document.getElementById('iphone_button4').addEventListener('click', () => {
	  if (document.getElementById('pdisplay4').classList.contains('invisible')==false){
			document.getElementById('pdisplay4').classList.add('invisible');
		}
		else{
			document.getElementById('pdisplay4').classList.remove('invisible');
		}
  });
  document.getElementById('iphone_button5').addEventListener('click', () => {
	  if (document.getElementById('pdisplay5').classList.contains('invisible')==false){
			document.getElementById('pdisplay5').classList.add('invisible');
		}
		else{
			document.getElementById('pdisplay5').classList.remove('invisible');
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
			document.getElementById('textm').innerText = 'Письмо отправлено!';
			if (theme!== '') {
					document.getElementById('theme').innerText= 'Тема: ' + theme;
			}
			else { document.getElementById('theme').innerText= 'Без темы'; }
			if (describe!== '') {
					document.getElementById('describem').innerText= 'Описание: ' + describe;
			}
			else { document.getElementById('describem').innerText= 'Без описания'; }
			document.getElementById('message_box').classList.remove('invisible_mes');
	}
});

CLOSE_BUTTON.addEventListener('click', () => {
	document.getElementById('textm').innerText = '';
	document.getElementById('theme').innerText = '';
	document.getElementById('describem').innerText = '';
	document.getElementById('message_box').classList.add('invisible_mes');
	document.getElementById('button_submit').reset();
});

//Прокрутка
document.addEventListener('scroll', onScroll);

function onScroll() {
  const currentPos = window.scrollY;
  const sect = document.querySelectorAll('a');
	const links = document.querySelectorAll('#head-menu a');
	
  sect.forEach((e) => {
    if (e.offsetTop <= currentPos && ((e.offsetTop + e.offsetParent.offsetHeight)) > currentPos) { 
      links.forEach((a) => {
        a.classList.remove('active');
        if (e.getAttribute('name') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      })
    }
  });
}