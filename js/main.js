/// <reference types ="../@types/jquery" /> 

// !============== Header =============>
const stars1 = document.getElementById('stars1');
const moon2 = document.getElementById('moon2');
const mountains3 = document.getElementById('mountains3');
const mountains4 = document.getElementById('mountains4');
const boat6 = document.getElementById('boat6');
const mountains7 = document.getElementById('mountains7');
const fun = document.getElementById('fun');
const main = document.getElementById('main');

onscroll =  function()
{
    let value = scrollY

    stars1.style.left = value + 'px'
    moon2.style.top = value * 3.5 + 'px'
    mountains3.style.top = value *2 + 'px'
    mountains4.style.top = value *1.5 + 'px'
    boat6.style.top = value  + 'px'
    boat6.style.left = value *2 + 'px'
    
    mountains7.style.top = value*.1 + 'px'
    fun.style.fontSize = value - 25 + 'px'

    if(scrollY >= 75 )
        {
            fun.style.fontSize = 50  + 'px'
            fun.style.position= 'fixed'
            if(scrollY >=369)
                {
                    fun.style.display= 'none'
                }
                else{
                    fun.style.display = 'block'
                }
               
        }

        if(scrollY >= 96)
            {
                console.log(scrollY);
             main.style.backgroundImage ='linear-gradient(#2d75bd , #10001f)'
            }
            else{
                console.log(scrollY);
               main.style.background = 'linear-gradient( #001020 , #10001f)'
            }
}
// !====================================>


// ?=============== aside ============>
$('.ii').on('click' , function(){
    $('.a-side').animate({width: 'show' , padding: 'show'} , 1000)
})

$('.close').on('click' , function()
{
    $('.a-side').animate({width:'toggle' , padding: 'toggle'} , 1000)
})

$('a').on('click' ,function(){
   let eleId = $(this).attr('href');
   let sectionOffset = $(eleId).offset().top

   $('body , html').animate({scrollTop:sectionOffset}  , 1500 )
})
// ?====================================>



// *============= Details =============>
$('#details .h31').on('click' , function(){
        $('#details .p1').slideToggle(500)
})
$('#details .h32').on('click' , function(){
    $('#details .p2').slideToggle(500)
})
$('#details .h33').on('click' , function(){
    $('#details .p3').slideToggle(500)
})
$('#details .h34').on('click' , function(){
    $('#details .p4').slideToggle(500)
})
// *====================================>



// ! =========== Counter =============>
let countDownDate = new Date('NOV 31, 2024 23:59:59').getTime()

let counter = setInterval(() => {
    let datenow = new Date().getTime()

    let dateDiff = countDownDate - datenow;

    let days = Math.floor( dateDiff/ (1000*60*60*24));
    let hours = Math.floor((dateDiff % (1000*60*60*24)) / (1000*60*60))
    let min = Math.floor((dateDiff % (1000*60*60)) /(1000*60) )
    let sec = Math.floor((dateDiff % (1000*60)) / 1000)

    $('.days').html(days + ' D')
    $('.hours').html(hours + ' h')
    $('.min').html(min + ' m')
    $('.sec').html(sec + ' s')
} , 1000)
// !====================================>

let progress = document.querySelector('.progress')
// ?============ inputCounter ===============>
$('textarea').on('input' , function(){
    let maxLength = $('textarea').attr('maxlength');
    

    $('.count').html(maxLength - this.value.length) 
   progress.style.width = `${(this.value.length *100) / maxLength}%`


})
