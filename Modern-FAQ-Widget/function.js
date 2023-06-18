appendStyle('fontAwesomeSource','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'); 



let element = $('.faqmainContainer')


$(element).find('.faqQuestion').click(function(){
    if($(this).parent().find('.faqAnswer').hasClass('faqActive')){
        $(this).parent().find('.faqAnswer').slideToggle().removeClass('faqActive');
    } else {
        $(element).find('.faqActive').slideToggle();
        $(element).find('.faqAnswer').removeClass('faqActive');
        $(this).parent().find('.faqAnswer').slideToggle().addClass('faqActive');
    }
    if($(this).parent().find('.qIcon').hasClass('flipIcon')){
        $(this).parent().find('.qIcon').removeClass('flipIcon');
    } else {
        $(element).find('.qIcon').removeClass('flipIcon');
        $(this).parent().find('.qIcon').addClass('flipIcon');
    }

    
})



function appendStyle(id, url) { 
    if (!document.getElementById(id)) { 
        let head = document.getElementsByTagName('head')[0]; 
        let link = document.createElement('link'); 
        link.id = id; 
        link.rel = 'stylesheet'; 
        link.type = 'text/css'; 
        link.href = url; 
        link.crossOrigin = 'anonymous'; 
        head.appendChild(link); 
    } 
}