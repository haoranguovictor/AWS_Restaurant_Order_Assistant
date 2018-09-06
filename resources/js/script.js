$(document).ready(function(){
    
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '100px;'
    });
    
   /*Scroll on buttons*/
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /*Animations on scroll*/
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /*Mobile nav */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round')
        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round')
        }
    });
    
    /*Google Map API*/
    var map = new GMaps({
      div: '.map',
      lat: 40.8041778,
      lng: -73.9345912,
      zoom:13  
    });
    
    map.addMarker({
      lat: 40.807649, 
      lng: -73.962762,
      title: 'Columbia University',
      click: function(e) {
        alert('I am here!');
      }
    });

    function uploadFile() {

    var file = document.getElementById('file').files[0];
    var fd = new FormData();

    var key = "events/" + (new Date ).getTime() + '-' + file.name;

    fd.append('key', key);
    fd.append('acl', 'public-read'); 
    fd.append('Content-Type', file.type);      
    fd.append('AWSAccessKeyId', 'YOUR ACCESS KEY');
    fd.append('policy', 'YOUR POLICY')
    fd.append('signature','YOUR SIGNATURE');

    fd.append("file",file);

    var xhr = getXMLHTTPObject();

    xhr.upload.addEventListener("progress", uploadProgress, false);
    xhr.addEventListener("load", uploadComplete, false);
    xhr.addEventListener("error", uploadFailed, false);
    xhr.addEventListener("abort", uploadCanceled, false);

    xhr.open('POST', 'https://<yourbucket>.s3.amazonaws.com/', true); //MUST BE LAST LINE BEFORE YOU SEND 

    xhr.send(fd);
  }
    
});