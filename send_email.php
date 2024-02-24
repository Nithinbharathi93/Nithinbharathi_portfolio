<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "nithinthelordest@gmail.com";ss
    $subject = "New Message from Portfolio Contact Form";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

    // Send email
    mail($to, $subject, $body);
    header('Location: contact.php?success=1');
} else {
    header('Location: contact.php?error=1');
}
?>
