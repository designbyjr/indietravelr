<div class="hero-div">
	<img src="THB.svg" alt="" class="thb">
	<img src="thb.png" alt="" class="thbhidden">
</div>
<section class="home-intro">
	<div class="home-introbox">
		<h2>GET INSIDER INFORMATION FROM THE BEST HACKERS</h2>
		<p>Sign up for our travel hacker interviews, guides, tips to become a Legand.
		</p>
		<form action="" id="tipsform">
			{{csrf_field()}}
			<input type="text" name="first" placeholder="First Name">
			<input type="email" name="email" placeholder="Email">
			<select name="country" id="">
				<option value="Country" disabled selected>Country</option>
			</select>
			<input type="submit" name="Get Travel Tips" value="Get Travel Tips">
		</form>
		<p>We never Spam!</p>
	</div>
</section>