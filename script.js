//Активные элементы шапки
const MENU = document.getElementById('head-menu');
  MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  
});

//Нажатие кнопок в секции портфолио
const GALLERY = document.getElementById('gall');
GALLERY.addEventListener('click',(event) => {
  GALLERY.querySelectorAll('button').forEach (el => el.classList.remove('active_button'));
  event.target.classList.add('active_button');
  if (event.target.classList.contains('gallery_filter_web')){ 
    const GALLERYIMG = document.getElementById('gallery_img');
    GALLERYIMG.querySelectorAll('div.graphic_design, div.artwork').forEach (el =>  el.style.display= 'none');
    GALLERYIMG.querySelectorAll('div.web_design').forEach (el =>  el.style.display= 'block');
    const PORTFOLIO = document.getElementById('portfolio');
    PORTFOLIO.style.height= '440px';
  }
  else if (event.target.classList.contains('gallery_filter_graph')){ 
    const GALLERYIMG = document.getElementById('gallery_img');
    GALLERYIMG.querySelectorAll('div.web_design, div.artwork').forEach (el =>  el.style.display= 'none');
    GALLERYIMG.querySelectorAll('div.graphic_design').forEach (el =>  el.style.display= 'block');
    const PORTFOLIO = document.getElementById('portfolio');
    PORTFOLIO.style.height= '440px';
  }
  else if (event.target.classList.contains('gallery_filter_art')){ 
    const GALLERYIMG = document.getElementById('gallery_img');
    GALLERYIMG.querySelectorAll('div.web_design, div.graphic_design').forEach (el =>  el.style.display= 'none');
    GALLERYIMG.querySelectorAll('div.artwork').forEach (el =>  el.style.display= 'block');
    const PORTFOLIO = document.getElementById('portfolio');
    PORTFOLIO.style.height= '440px';
  }
  else if (event.target.classList.contains('gallery_filter_all')){ 
    const GALLERYIMG = document.getElementById('gallery_img');
    GALLERYIMG.querySelectorAll('div.artwork, div.web_design, div.graphic_design').forEach (el =>  el.style.display= 'block');
    const PORTFOLIO = document.getElementById('portfolio');
    PORTFOLIO.style.height= '864px';
  }
});

//Нажатие на рисунок в портфолио
const IMAGECLICK = document.getElementById('gallery_img');
  IMAGECLICK.addEventListener('click', (event) => {
  IMAGECLICK.querySelectorAll('img').forEach(el => el.classList.remove('clicked_img'));
  if (event.target.className =='img'){event.target.classList.add('clicked_img');
  document.getElementsByClassName('artwork').forEach(el => el.parentNode.classList.add('cicked_img_div'));
  }
});