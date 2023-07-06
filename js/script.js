//ALTERAR COR DO HEADER
window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
      header.style.backgroundColor = '#ffffff';
  } else {
      header.style.backgroundColor = 'transparent';
  }
});

window.addEventListener('load', function() {
  let header = document.querySelector('header');
  let scrollTopStart = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTopStart > 0) {
    header.style.backgroundColor = '#ffffff';
  } else {
    header.style.backgroundColor = 'transparent';
  }

})

document.addEventListener('DOMContentLoaded', function() {
    AOS.init(); 
    
    var links = Array.from(document.querySelectorAll(".link-nav"));
    var btnHomeBuy = document.getElementById("btn-home-buy");
    
    links.push(btnHomeBuy);
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);
    
        if (targetElement) {
          var offset = targetElement.offsetTop - 90; // Subtraia o valor da altura do cabeçalho aqui
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }
      });
    });
  });

//MÁSCARA CELULAR
$(document).ready(function(){
  $('#cellphone').mask('(00) 00000-0000');
})

  
  
  
  
  
  