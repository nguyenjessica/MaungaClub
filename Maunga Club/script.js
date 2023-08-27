const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky, window.scrollY > 60")

})

document.querySelector('.image-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.execCommand('insertHTML', false, '<br><br>');
    }
  });

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".chalet__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".chalet__card__content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
  });
  