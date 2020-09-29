function changecss(attr){
    var css;
    if(attr =="en")
    css = "css/style-en.css";
    else
    css = "css/style.css";
    document.getElementById('style').href = css;
} 
var yemencities="<option value='sana'>صنعاء</option><option value='tiaz'>تعز</option><option value='Aden'>عدن</option>";
var egyptcities="<option value='Cairo'>القاهرة</option><option value='Alexandria'>الإسكندرية</option>";
var cities=document.getElementById("cities") ;
var country=document.getElementById("Country");
function changcity()
{
    if(country.value=="yemen") 
    {
        cities.innerHTML=yemencities ;
    }
    else
    {
        cities.innerHTML=egyptcities;
    }
}
$(document).ready(function()
{


if($('.bbb_viewed_slider').length)
{
var viewedSlider = $('.bbb_viewed_slider');

viewedSlider.owlCarousel(
{
loop:true,
margin:30,
autoplay:true,
autoplayTimeout:6000,
nav:false,
dots:false,
responsive:
{
0:{items:1},
575:{items:2},
768:{items:3},
991:{items:4},
1199:{items:6}
}
});

if($('.bbb_viewed_prev').length)
{
var prev = $('.bbb_viewed_prev');
prev.on('click', function()
{
viewedSlider.trigger('prev.owl.carousel');
});
}

if($('.bbb_viewed_next').length)
{
var next = $('.bbb_viewed_next');
next.on('click', function()
{
viewedSlider.trigger('next.owl.carousel');
});
}
}
});


var langArray = [];
$('.vodiapicker option').each(function(){
var img = $(this).attr("data-thumbnail");
var text = this.innerText;
var value = $(this).val();
var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'yemen');

//change button stuff on click
$('#a li').click(function(){
var img = $(this).find('img').attr("src");
var value = $(this).find('img').attr('value');
var text = this.innerText;
var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
$('.btn-select').html(item);
$('.btn-select').attr('value', value);
$(".div-country-flag").toggle();

//console.log(value);
});

$(".btn-select").click(function(){
  $(".div-country-flag").toggle();
});

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
//find an item with value of sessionLang
var langIndex = langArray.indexOf(sessionLang);
$('.btn-select').html(langArray[langIndex]);
$('.btn-select').attr('value', sessionLang);
} else {
var langIndex = langArray.indexOf('ch');
console.log(langIndex);
$('.btn-select').html(langArray[langIndex]);
//$('.btn-select').attr('value', 'en');
}
