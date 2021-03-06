
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
const MENULINKS = document.getElementsByClassName("menu_link");
const SMALLMENU = document.getElementById("head_accord");
const HEADLOGO = document.getElementById("head_logo");
const HEADMENU = document.getElementById("head_menu_cont");


function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this), ms);
  }
}

//Кнопка мини меню
SMALLMENU.addEventListener('click',() => {
  if (HEADMENU.classList.contains('menu_open_menu')){
    HEADMENU.classList.remove('menu_open_menu');
    SMALLMENU.classList.add('menu_open_accordion');
    HEADLOGO.classList.add('menu_open_logo');
  }
  else{
    HEADMENU.classList.add('menu_open_menu');
    SMALLMENU.classList.remove('menu_open_accordion');
    HEADLOGO.classList.remove('menu_open_logo');
  }
});

//Нажатие на свободное пространство вне меню
HEADMENU.addEventListener('click',() => {
  if (HEADMENU.classList.contains('menu_open_menu')===false){
    SMALLMENU.classList.remove('menu_open_accordion');
    HEADMENU.classList.add('menu_open_menu');
    HEADLOGO.classList.remove('menu_open_logo');
  }  
});

//Активные элементы шапки
MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('a').forEach(el => {
    if (HEADMENU.classList.contains('menu_open_menu')===false){
      HEADMENU.classList.add('menu_open_menu');
      SMALLMENU.classList.remove('menu_open_accordion');
      HEADLOGO.classList.remove('menu_open_logo');
    }
    el.classList.remove('active');
	event.target.classList.add('active');});});


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
  const sect = document.querySelectorAll('section');
	const links = document.querySelectorAll('#head-menu a');
	const headerheight = 95;
	
  sect.forEach((e) => {
    if (e.offsetTop <= currentPos && (e.offsetTop+ e.offsetHeight/2) > currentPos) { 
      links.forEach((a) => {
        a.classList.remove('active');
        if (e.getAttribute('id') === a.getAttribute('name')) {
          a.classList.add('active');
        }
      })
    }
	});
	if (isfooter()){
		links.forEach((a) => {a.classList.remove('active');});
		MENULINKS[MENULINKS.length-1].classList.add('active');
	}
}

function isfooter() {
  return window.pageYOffset >= document.documentElement.offsetHeight - innerHeight
}