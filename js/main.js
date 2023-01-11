
$(document).ready(function (){

$('.nav_burger').on('click', function(){
    $("#popup").toggleClass('submenu-active'); 
});



 $(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( "#popup" ); // тут указываем ID элемента
		var brgBtn = $( "#burgerBtn" );

        if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 &&
            !brgBtn.is(e.target) 
            && brgBtn.has(e.target).length === 0          
            
            )
                   
            { // и не по его дочерним элементам
			div.removeClass('submenu-active'); // скрываем его
		}
	});


/*var btnBurger = $('.nav_burger');
var submenuv = $('.submenu');

$(document).mouseup(function (e) {
    if ( ! btnBurger.is(e.target) && btnBurger.has(e.target).lenght === 0 && 
    ! submenuv.is(e.target) && submenuv.has(e.target).lenght === 0
    ) {
    submenuv.div("submenu-active");
    }    
});  */ 








/*$('.nav_burger').on('click', function(){
    $('.submenu').display('none'); 
});*/






/*$('.input-btn').on('click', function(){
    $('.submenu').removeClass("submenu-active");
}); */
    









});
