<?php
 
header('Content-type: application/json');
 
$errors = '';
 
if(empty($errors))
{
 
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
 	$from_name = $request->name;
 	$from_email = $request->email;
	$comments = $request->comments;
 
	$to_email = "miguelsobrinsueiras@gmail.com";
 
	$contact = "<p><strong>Nombre:</strong> $from_name</p>
				<p><strong>Email:</strong> $from_email</p>";
	$content = "<p><strong>Comentarios adicionales:</strong> </p><p>$comments</p>";
 
	$website = '[ConstruccionesSobrin.com]';
	$email_subject = "$website: Nueva consulta en www.construccionessobrin.com";
 
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';
 
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";
 
	mail($to_email,$email_subject,$email_body,$headers);
 
	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>