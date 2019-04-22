// first div particles animation
	var options = {"particles":{"number":{"value":99,"density":{"enable":true,"value_area":20}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":70,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5782952832645452,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false};
particlesJS("particle", options);
//welcome div words
 $(function () {
  count =-1;
  wordsArray = ["யாதும் ஊரே யாவரும் கேளிர்", "தீதும் நன்றும் பிறர்தர வாரா", "உணவூட்டும் விவசாயத்திற்கு உயிரூட்டுவோம்","தமிழகத்தின் முதல் இணையதள வானொலி சேவை - வானிசை பண்பலை !","www.vaanisaifm.com","உங்கள் விருப்பமான பாடல்களை HD தரத்தில் கேட்டு மகிழுங்கள் !","வாழ்க நிரந்தரம் வாழ்க தமிழ்மொழி வாழிய வாழிய வே!","கடவுளை மற ! மனிதனை நினை !","நீங்கள் இணைந்து இருப்பது, வானிசை பண்பலை - இது உங்கள் உற்சாகத்தின் எல்லை.","மனதிலுறுதி வேண்டும் !"," வாக்கினி லேயினிமை வேண்டும் !","நினைவு நல்லது வேண்டும் ! ","நெருங்கின பொருள் கைப்பட வேண்டும்","கனவு மெய்ப்பட வேண்டும் !"," கைவசமாவது விரைவில் வேண்டும் !","தனமும் இன்பமும் வேண்டும் !"," தரணியிலே பெருமை வேண்டும் !","உங்களது வாழ்க்கை பயணம் வெற்றிகரமாக அமைய வானிசை பண்பலையின் வாழ்த்துகள்.","கண் திறந்திட வேண்டும் !"," காரியத்தி லுறுதி வேண்டும் !","பெண் விடுதலை வேண்டும் !"," மண் பயனுற வேண்டும் !","வானகமிங்கு தென்பட வேண்டும் ! ","உண்மை நின்றிட வேண்டும் !"];
  setInterval(function () {
    count++;
    $("#welcomeWord").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 4000);
});
//news vaanisai div
 $(function () {
  count1 =1;
  newsArray = ["Vaanisai News Corner","வானிசை செய்திகள்","News Updates","Hot News Live","Breaking News"];
  setInterval(function () {
    count1++;
    $("#vaanisaiNewsDiv").fadeOut(400, function () {
      $(this).text(newsArray[count % newsArray.length]).fadeIn(400);
    });
  }, 3000);
});
//programs vaanisai div
 $(function () {
  count1 =1;
  prgramsArray = ["Vaanisai Programs","வானிசை நிகழ்ச்சிகள்"];
  setInterval(function () {
    count1++;
    $("#vaanisaiProgramsDiv").fadeOut(400, function () {
      $(this).text(prgramsArray[count % prgramsArray.length]).fadeIn(400);
    });
  }, 4000);
});
//scroll on navbar	
	window.onscroll = function() {myFunction()};
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;
	function myFunction() {
	  if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	  } else {
		navbar.classList.remove("sticky");
	  }
	}
//for tamil date scroll	
	function renderTime1() {
	var currentTime1 = new Date();
	var diem1 = "காலை";
	var h1 = currentTime1.getHours();
	var m1 = currentTime1.getMinutes();
    var s1 = currentTime1.getSeconds();
	var dd1 = currentTime1.getDate();
	var mm1 = currentTime1.getMonth() + 1; //January is 0!
	var yyyy1 = currentTime1.getFullYear();
		if (dd1 < 10) {
		  dd1 = '0' + dd1;
		} 
		if (mm1 < 10) {
		  mm1 = '0' + mm1;
		} 
	var currentDate1 = dd1 + '/' + mm1 + '/' + yyyy1;
		document.getElementById("date").innerHTML = dd1 + '.' + mm1 + '.' + yyyy1;
	switch (currentTime1.getDay()) {
  case 0:
    day1 = "ஞாயிற்றுக்கிழமை";
    break;
  case 1:
    day1 = "திங்கள்கிழமை";
    break;
  case 2:
    day1 = "செவ்வாய்க்கிழமை";
    break;
  case 3:
    day1 = "புதன்கிழமை";
    break;
  case 4:
    day1 = "வியாழக்கிழமை";
    break;
  case 5:
    day1 = "வெள்ளிக்கிழமை";
    break;
  case  6:
    day1 = "சனிக்கிழமை";
}
switch (currentTime1.getMonth()) {
  case 0:
    month1 = "மார்கழி";
    break;
  case 1:
    month1 = "தை";
    break;
  case 2:
    month1 = "மாசி";
    break;
  case 3:
    month1 = "பங்குனி";
    break;
  case 4:
    month1 = "சித்திரை";
    break;
  case 5:
    month1 = "வைகாசி";
    break;
  case  6:
    month1 = "ஆனி";
	break;
  case 7:
    month1 = "ஆடி";
    break;
  case 8:
    month1 = "ஆவணி";
    break;
  case 9:
    month1 = "புரட்டாசி";
    break;
  case 10:
    month1 = "ஐப்பசி";
    break;
  case 11:
    month1 = "கார்த்திகை";
    break;
}
	setTimeout('renderTime1()',1000);
    if (h1 == 0) {
		h1 = 12;
	} else if (h1 > 12) { 
		h1 = h1 - 12;
		diem1="மாலை";
	}
	if (h1 < 10) {
		h1 = "0" + h1;
	}
	if (m1 < 10) {
		m1 = "0" + m1;
	}
	if (s1 < 10) {
		s1 = "0" + s1;
	}
	 tamilMonth = month1;
	 tamilhours = h1;
	 tamilMinutes = m1;
	 tamilSec = s1;
	 tamilDay = day1;
}
renderTime1();
//for english date scroll	
function renderTime() {
	var currentTime = new Date();
	var diem = "AM";
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
	var dd = currentTime.getDate();
	var mm = currentTime.getMonth() + 1; //January is 0!
	var yyyy = currentTime.getFullYear();
		if (dd < 10) {
		  dd = '0' + dd;
		} 
		if (mm < 10) {
		  mm = '0' + mm;
		} 
	var currentDate = dd + '-' + mm + '-' + yyyy;
	switch (currentTime.getDay()) {
  case 0:
    day = "Sunday";
	quote ="Happy Sunday!";
    break;
  case 1:
    day = "Monday";
	quote ="Happy Monday!";
    break;
  case 2:
    day = "Tuesday";
	quote ="Happy Tuesday!";
    break;
  case 3:
    day = "Wednesday";
	quote ="Happy Wednesday!";
    break;
  case 4:
    day = "Thursday";
	quote ="Happy Thursday!";
    break;
  case 5:
    day = "Friday";
	quote ="Happy Friday!";
    break;
  case  6:
    day = "Saturday";
	quote ="Happy Saturday!";
}
switch (currentTime.getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case  6:
    month = "July";
	break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
}
	setTimeout('renderTime()',1000);
    if (h == 0) {
		h = 12;
	} else if (h > 12) { 
		h = h - 12;
		diem="PM";
	}
	if (h < 10) {
		h = "0" + h;
	}
	if (m < 10) {
		m = "0" + m;
	}
	if (s < 10) {
		s = "0" + s;
	}
    var myClock = document.getElementById('dtText');
	myClock.textContent ="* "+"Vaanisai Time -" + h + ":" + m + ":" + s + " " + diem +" - "+month +" - "+day +" - "+currentDate +" * "+" நேரம்"+" - "+tamilhours + ":" + tamilMinutes + ":" + tamilSec+ " மணி " +" - "+ tamilMonth + " மாதம் " + tamilDay+ " * " +"தன்னம்பிக்கையோடு இலக்கை நோக்கி பயணித்தால் எல்லா நேரமும் நல்ல நேரமே!"+" * "+quote +" * "+"Vaanisai FM - First Online Radio Channel In Tamilnadu!"+" * "+"Stay Tuned Always With Vaanisai";
	myClock.innerText   ="* "+"Vaanisai Time -" + h + ":" + m + ":" + s + " " + diem +" - "+month +" - "+day +" - "+currentDate +" * "+" நேரம்"+" - "+tamilhours + ":" + tamilMinutes + ":" + tamilSec+ " மணி " +" - "+ tamilMonth + " மாதம் " + tamilDay+ " * " +"தன்னம்பிக்கையோடு இலக்கை நோக்கி பயணித்தால் எல்லா நேரமும் நல்ல நேரமே!"+" * "+quote +" * "+"Vaanisai FM - First Online Radio Channel In Tamilnadu!"+" * "+"Stay Tuned Always With Vaanisai";
}
renderTime();
//community form
 $(function () {
  communitycount =1;
  communityArray = ["Join Now !","இசையால் இணைந்திடுவோம் இன்றே !","Join Today !","வானிசையோடு இணைவோம் !"];
  setInterval(function () {
    communitycount++;
    $("#communityWelcome").fadeOut(400, function () {
      $(this).text(communityArray[count % communityArray.length]).fadeIn(400);
    });
  }, 3000);
});
 $(document).ready(function () {
        $('.mediPlayer').mediaPlayer();
    });

function testInput(event) {
   var value = String.fromCharCode(event.which);
   var pattern = new RegExp(/[a-zåäö ]/i);
   return pattern.test(value);
}
 $(function () {
  foundercount = 0;
  foundersArray = ["நீ யார் என்று நிருபி அங்கிகரிக்கபடுவாய், ஆனால் நீ நிருபிக்கும் வரை நிராகரிக்கபடுவாய்.", "ஏதுவும் இல்லாத போதும் சமாளிக்கும் திறமையும், எல்லாம் உள்ளபோது நீ நடந்துகொள்ளும் முறையும்தான் உன் வெற்றியை தீர்மானிக்கிறது.", "நமது ஓடுகின்ற கால்கள் ஓய்வெடுக்கும் போது, நாம் எடுத்துக்கொண்ட பயணம் முடிந்திருக்க வேண்டும்.","தொடர்ந்து ஆதரவு அளித்துவரும் நேயர்களுக்கும், எங்களது சமூக வலைத்தளங்கள் மற்றும் வானிசை குழுவில் இணைந்துள்ள அன்பர்களுக்கும், ஆதரவு அளித்துவரும் நண்பர்களுக்கும் மற்றும் விளம்பரதாரர்களுக்கும் எங்களது நெஞ்சார்ந்த நன்றிகள் !"];
  setInterval(function () {
    foundercount++;
    $("#foundersWord").fadeOut(400, function () {
      $(this).text(foundersArray[count % foundersArray.length]).fadeIn(400);
    });
  }, 8000);
});
$('#my-field').bind('keypress', testInput);	
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})
// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});
