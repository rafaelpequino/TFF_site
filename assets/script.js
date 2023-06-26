//ALTERAR COR DO HEADER
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
      header.style.backgroundColor = '#ffffff';
  } else {
      header.style.backgroundColor = 'transparent';
  }
});

document.addEventListener('DOMContentLoaded', function() {
    var links = Array.from(document.querySelectorAll("#navbar a"));
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
  
  
  
  
  
  