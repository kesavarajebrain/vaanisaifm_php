
<?php include 'header.php';?>
<br>
<div class="container"><p class="communityText"><i class="fa fa-smile-o" aria-hidden="true"></i> About Us</p></div>
<div class="container-fluid communityCard">
	<div class="row" style="background-color:white;box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);border-radius: 10px;">
		<div class="col-md-6">
		<p class="communityTextone">We are happy for entertaining you by music!</p>
			<p class="tamilAboutText">தேன் கூட சாப்பிட சாப்பிட தெவிட்டுவிடும், ஆனால் இசையானது எப்போது கேட்டாலும், எவ்வளவு கேட்டாலும் மனதிற்கு மகிழ்ச்சியை தரும். அப்படிப்பட்ட இசையை உங்களுக்கு வழங்குவதில் பெருமை கொள்கிறோம். வானிசை பண்பலை 2018 ஆம் ஆண்டு தனது சேவையை திருச்சியில் தொடங்கியது.  உங்களது பேராதரவுடன் எங்களது பயணத்தை தொடர்ந்து வருகிறோம். இணைந்தே இருங்கள் வானிசையோடு. உங்களால் இது சாத்தியமாயிற்று.</p>
			<p class="englishAboutText">Honey will also be eaten to eat it will be tasteless, but when the music is heard, no matter how much you hear, it will bring happiness to your heart. We are proud to give you such music. In the year 2017, the service was started in Trichy. We are continuing our journey with your patronage. Stay in touch with VAANISAI FM. This is possible by you.</p>
		</div>
		<div class="col-md-6 foundersDiv" style="background-image: url('./assets/images/24038833.gif');">
		<p class="communityForm">Founder's Voice</p>
		<p style="text-align:center;"><img src="./assets/images/undrlinetwo.png" width="200px;" style="margin-top: -25px;"></p>
			<div>
				<p class="tamilAboutText" id="foundersWord"></p>
				<p class="tamilCommunitycommittee">- R.Kesava Raj ,Founder ,Vaanisai FM.</p>
			</div>
		</div>
	</div>
</div>
<script>
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
</script>
<?php include 'footerone.php';?>