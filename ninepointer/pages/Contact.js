import React from "react";
import styles from '../styles/contactformstyle.module.css';
const contact = () => {
    return(
               
        <form>
			<div className={styles.flexcontainer}>

			<section className={styles.mainCol}/>
            
            <div className ="main"> 
		<div class="register">
			<h2>We'd love to hear from you</h2></div>
			<form id="register" method="post">
			    <label>First Name :</label>
			    
			    <input type="text" name="fname" id="name" placeholder="Enter Your First Name"></input>
			    <br/>
			    <div>
			    <label>Last Name : </label>
			    <br/>
    		
            
    		<input type="text" name="last-name" placeholder="Enter Your Last Name"></input>
    		</div>
			    	<br/>
			    	<label>Your Phone no. :</label>
			    	<br/>
			    	<input type="number" name="Phone" id="name" placeholder="Enter your Roll No.">
						 </input>
			    	
			    	<label>Email : </label>
			    	<br/> 
			    	<input type="email" name="email" id="name" placeholder="Enter your valid e-mail ID"></input>
			    	<br/>
			    	<div>
            <label>College name</label>
    		
    		</div>
    		<br/>
    		
    		

    		<div>
            <label>Message</label>
            <br/>
    		<textarea name="MESSAGE" placeholder="Enter your suggestions(if any)"></textarea>
    		</div>
    		<br/>
<input type="submit" name="submit"value="Submit"></input>


			</form> 
			

        
    )
	
</div>
<section className={styles.sidebarCol}/>

<body>
    <h1> Contact info </h1>
    <br/> <br/> <br/> 
<ion-icon name="call-outline"></ion-icon>  <p> +91 7536982139</p>
<br/>
<ion-icon name="mail-outline"></ion-icon>  <p> <a href="info@ninepointer.com"> </a> </p>
    <br/> <br/>
    <a href="https://www.facebook.com/people/ninepointer/100083236507235/">
    <ion-icon name="logo-facebook"></ion-icon>
    </a>
<a href="https://api.whatsapp.com/send?phone=917737384957">
<ion-icon name="logo-whatsapp"></ion-icon>
</a>


<a href="https://www.instagram.com/nine_pointer/">
<ion-icon name="logo-instagram"></ion-icon>
</a>
<a href="https://www.youtube.com/channel/UCgslF4zuDhDyttD9P3ZOHbg/featured">
<ion-icon name="logo-youtube"></ion-icon>
</a>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</div> </form> 
 )}

export default contact 
