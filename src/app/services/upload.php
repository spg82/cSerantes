<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
 
$ftp_server="192.168.0.4";
 $ftp_user_name="pi";
 $ftp_user_pass="ab.cd1/1";
 $file = $request->filename;//tobe uploaded
 $remote_file = "/var/www/html".$request->filename;

 // set up basic connection
 $conn_id = ftp_connect($ftp_server);

 // login with username and password
 $login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);

 // upload a file
 if (ftp_put($conn_id, $remote_file, $file, FTP_ASCII)) {
    echo "successfully uploaded $file\n";
    exit;
 } else {
    echo "There was a problem while uploading $file\n";
    exit;
    }
 // close the connection
 ftp_close($conn_id);
?>