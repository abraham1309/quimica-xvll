const typed=new Typed('.typed', {
    /*
    strings: [
        'Hola', 
        'hola2', 
        'hola3'
    ],
    */
    
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: true, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

/*Efecto activo al hacer scroll*/
let seccion=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('nav ul li a');

window.onscroll=()=>{
    seccion.forEach(sec=>{
        let top=window.scrollY;
        let cordenas=sec.offsetTop-150; /*Devuelve la posición superior (en píxeles) relativa a la parte superior del elemento*/
        let alto=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=cordenas && top<cordenas+alto){
            navLinks.forEach(links=>{
                links.classList.remove('activo');
                document.querySelector('nav ul li a[href*='+ id +']').classList.add('activo');
            });
        }
    });

};

//Metodo para cerrar el munu del navbar para celulares
$(".navbar-nav li a").click(function (event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});

/*Metodo para el spiner*/
(function($) {
    "use strict"; 
	
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});
})(jQuery);
