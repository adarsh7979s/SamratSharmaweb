<?php
// Basic shared-hosting mail handler for contact form.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Location: contact.html');
  exit;
}

$to = '17sharmadh@gmail.com';
$subject = 'New Website Inquiry - Samrat Sharma Furniture';

$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$interest = trim($_POST['interest'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $phone === '' || $interest === '' || $message === '') {
  header('Location: contact.html?status=error');
  exit;
}

$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safePhone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeInterest = htmlspecialchars($interest, ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$body = "New inquiry from website:\n\n";
$body .= "Name: {$safeName}\n";
$body .= "Phone: {$safePhone}\n";
$body .= "Interested In: {$safeInterest}\n\n";
$body .= "Message:\n{$safeMessage}\n";

$headers = "From: noreply@samratsharmafurniture.com\r\n";
$headers .= "Reply-To: 17sharmadh@gmail.com\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);
if ($sent) {
  header('Location: contact.html?status=success');
  exit;
}

header('Location: contact.html?status=error');
exit;
?>
