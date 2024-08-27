<!DOCTYPE HTML>  
<html>
<head>
<style>
.error {color: #FF0000;}
</style>
</head>
<body>
<form action="send_email.php" method="POST">
        <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
          <div class="w3-half">
            <input class="w3-input w3-border" 
            type="text" 
            placeholder="Name" 
            required name="name">
          </div>
          <div class="w3-half">
            <input class="w3-input w3-border" 
            type="email" 
            placeholder="Email" 
            required name="email">
          </div>
        </div>
        <input class="w3-input w3-border" type="text" placeholder="Message" required name="message">
        <button class="w3-button w3-black w3-right w3-section" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "tom.w.maidment@outlook.com"; // Replace with the recipient's email address
  $subject = "Test Email";
  $message = "This is a test email.";
  $headers = "From: tom.w.maidment@outlook.com"; // Replace with your Outlook email address

  if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Failed to send email.";
  }
}
?>
</body>
</html>

