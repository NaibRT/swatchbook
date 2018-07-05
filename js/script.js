var swatchitem = $('.swatchbook').children();
jQuery.fn.rotate = function(degree){
    var d=degree;
$(this).css({
    'transform':'rotate('+d+'deg)',
    'transform-origin':'25% 90%',
});
return $(this);
}

$(document).ready(function(){
    var x=-(90-(90/(swatchitem.length/2))/2);
    var deg=((90/(swatchitem.length/2)));
    for(var i=0;i<swatchitem.length;i++){
            //deg+=(-deg);
            swatchitem.eq(i).rotate(x);
            x=x+deg;
            
            console.log(x);
       
      
        
    };
});



console.log(swatchitem );
swatchitem.each(function(){
    var x=((90/(swatchitem.length)));;
    var y=x;
    $(this).click(function(){
        $(this).rotate(0);
        var prev=$(this).prevAll();
        var next=$(this).nextAll();
        console.log(next);
        for(var i=0;i<prev.length;i++){
            prev.eq(i).rotate((0-x));
            
            x+=y;
        }
        x=((90/(swatchitem.length)));;
        for(var j=0;j<next.length;j++){
        next.eq(j).rotate(40+x);
        x+=y;
        }
        x=((90/(swatchitem.length)));;
    })
    
})
    

         
    
