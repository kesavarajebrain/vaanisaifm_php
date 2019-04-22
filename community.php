<?php include 'header.php';?>
<div class="container"><p class="communityText"><i class="fa fa-users" aria-hidden="true"></i> Join Our Community</p></div>
<div class="container-fluid communityCard ">
	<div class="row" style="background-color:white;box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);border-radius: 10px;">
		<div class="col-md-6">
		<p class="communityTextone">Why Vaanisai Community?</p>
		 <ul class="nav nav-pills communityDiv" style="box-shadow: none !important;">
		    <li class="communityTamil"><a data-toggle="pill" href="#menu1">தமிழில் காண</a></li>
			<li class="active communityEnglish"><a data-toggle="pill" href="#home">In English</a></li>
			<li><a data-toggle="modal" data-target="#myModal" style="text-decoration:underline;color:#15793B;font-family: 'Oxygen', sans-serif;font-weight:bold;cursor:pointer;"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Proof</a></li>
		</ul>
		<div class="modal fade " id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
        <div class="modal-dialog">
            <div class="modal-content ">
                <div class="modal-header" style="background-color:#15793B !important;">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span>

                    </button>
                     <h5 class="modal-title modalHead" id="myModalLabel">Our Contributions / எங்களால் இயன்றவை !</h5>

                </div>
                <div class="modal-body">
				<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Wrapper for slides -->
    <div class="carousel-inner">
	 <input type="checkbox" id="zoomCheck">
      <label class="item active" for="zoomCheck">
        <img src="./assets/images/testimonials/kajavaanisai.png" alt="Los Angeles" style="display: block;width:100%;height:500px;">
		 <div class="carousel-caption">
      <p>கஜா புயல் நிவாரணம் !</p>
	  <p style="margin-top:0%;">Kaja cyclone relief !</p>
    </div>
      </label>

      <div class="item">
	   <input type="checkbox" id="zoomCheck1">
	   <label for="zoomCheck1">
			 <img src="./assets/images/testimonials/vaanisaikerala.jpg" alt="Chicago"  style="display: block;width:100%;height:500px;">
			  <div class="carousel-caption">
      <p>கேரளா பெருவெள்ள நிவாரணம்!</p>
	  <p style="margin-top:0%;">Kerala flood relief !</p>
    </div>
	   </label>  
      </div>
    
      <div class="item">
	   <input type="checkbox" id="zoomCheck2">
	    <label for="zoomCheck2">
		 <img src="./assets/images/testimonials/kesavakerala.jpg" alt="New york"  style="display: block;width:100%;height:500px;">
		  <div class="carousel-caption">
      <p>கேரளா பெருவெள்ள நிவாரணம் !</p>
	   <p style="margin-top:0%;">மற்றும் பல / and so on . . .</p>
    </div>
		</label>
      </div>
    </div>
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev" style="margin-top: 50%; margin-bottom: 50%;text-shadow:none !important;background-image:none !important;">
      <i class="fa fa-chevron-left" style="color:#15793B !important;"></i>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next" style="margin-top: 50%; margin-bottom: 50%;text-shadow:none !important;background-image:none !important;">
		<i class="fa fa-chevron-right" style="color:#15793B !important;"></i>
      <span class="sr-only">Next</span>
    </a>
  </div>
				</div>
                <!--<div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>-->
            </div>
        </div>
</div>
  <div class="tab-content">
  <div id="menu1" class="tab-pane fade">
	     <p class="tamilCommunityPara">பிறர்க்கு உதவும் மனப்பான்மை கொண்டவரா நீங்கள், எங்களோடு கைகோர்த்து உதவ சிவப்பு கம்பளம் விரித்து வரவேற்கிறது வானிசை பண்பலை. எங்களது நிகழ்ச்சிகள் உங்களுக்கு பிடித்திருந்தால் வாருங்கள் கைகோர்ப்போம் பிறர்க்கு உதவ. கீழ்காணும் விண்ணப்பத்தை பூர்த்தி செய்து எங்களோடு இணைய உங்களுக்கு வாழ்த்துக்கள். யாருக்கு தெரியும் நாளை இது நாடாளும் கட்சியாக கூட உருவெடுக்கலாம்.</p>
    </div>
    <div id="home" class="tab-pane fade in active">
       <p class="englishCommunityPara">If you have a different attitude, you are welcome to help others and join with us, we welcome you once again with red carpet. If you like our programs please come together to help others. Please complete the following application and congratulate you for join with us. Who knows, tomorrow it can even become a party.</p>
    </div>
  </div>
		</div>
		<div class="col-md-6">
		<p class="communityForm" id="communityWelcome"></p>
	<form class="communityRegForm" method="post" name ="communityForm">
		<div class="form-group">
			<label class="labelNames" for="name">Enter Name / பெயர்</label>
			<input type="text" class="form-control" id="my-field" name="membername" placeholder="Type your name" required>
		</div>
		<div class="form-group">
			<label class="labelNames" for="phone">Enter Mobile Number / அலைபேசி</label>
			<input type="phone" class="form-control" name="membernumber" placeholder="Type your mobile number" required  pattern="[6789][0-9]{9}" maxlength="10" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');">
		</div>
		<div class="form-group">
			<label class="labelNames" for="email">Enter Email / மின்னஞ்சல்</label>
			<input type="email" class="form-control" name="membermail" placeholder="Type your email address" required>
		</div>
		<div class="form-group">
			<label class="labelNames" for="city">Enter City / ஊர்</label>
			<input type="text" class="form-control" name="membercity" placeholder="Type your city" required>
		</div>
		
		<button type="submit" class="btn btn-primary" name="save" href="verifyotp.php"><i class="fa fa-thumbs-up" aria-hidden="true"></i> I Agree To Join</button>
		<button type="reset" class="btn btn-primary"><i class="fa fa-refresh" aria-hidden="true"></i> Reset Form</button>
		<?php
		
			if(isset($_POST['save'])){
			$_SESSION['membername'] = $_POST['membername'];
			$_SESSION['membernumber'] = $_POST['membernumber'];
			$_SESSION['membermail'] = $_POST['membermail'];
			$_SESSION['membercity'] = $_POST['membercity'];
			$otp = mt_rand(10000,99999);
			$ourgenerated = $otp;
			$membernumber = $_SESSION['membernumber'];
			$_SESSION['validotp'] = $ourgenerated;
			// echo"$ourgenerated";
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "http://control.msg91.com/api/sendotp.php?otp_length=4&authkey=269636AJSKkqL65c9bbf07&sender=VAANFM&mobile=$membernumber&otp=$ourgenerated",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "",
  CURLOPT_SSL_VERIFYHOST => 0,
  CURLOPT_SSL_VERIFYPEER => 0,
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
   echo $response ."<br/>";
   echo $_SESSION['membername']."<br/>";
     echo $_SESSION['membernumber']."<br/>";
	   echo $_SESSION['membermail']."<br/>";
	     echo $_SESSION['membercity']."<br/>";
		   echo $_SESSION['validotp']."<br/>";
		   echo $membernumber;
// echo "<script> alert('OTP was sent successfully to your number! Click OK to continue..')</script>";
 echo "<script> document.location.href='verifyotp.php?showMessage=1';</script>";
}
	}
	
			// if(isset($_POST['save'])){
				// $sql = "INSERT INTO communitymembers (member_name,member_number,member_email,member_city)
				// VALUES ('".$_POST["name"]."','".$_POST["number"]."','".$_POST["usermail"]."','".$_POST["city"]."')";
				// echo $sql;
				// echo "<script>console.log( '$sql' );</script>";
			// }
		 ?>
		
	</form>	
		

  <!-- Modal -->
  <div class="modal fade" id="otpModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Thank you for your intrest!</h4>
        </div>
        <div class="modal-body">
          <p>OTP was sent your mobile number!</p>
        </div>
      </div>
      
    </div>
  </div>
		</div>
	</div>
</div>
<?php include 'footer.php';?>