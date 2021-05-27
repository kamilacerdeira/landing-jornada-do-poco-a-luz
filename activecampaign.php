<?php
if(isset($_POST['email'])){
    $email = $_POST['email'];
    $ch = curl_init();
    
    $data = array(
        'contact' => array(
            'email' => $email
        )
    );
    $payload = json_encode($data);
    
    curl_setopt_array($ch, [
      CURLOPT_URL => "https://pedroaugustolaunchs.api-us1.com/api/3/contacts/",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_CUSTOMREQUEST => "POST",
      CURLOPT_HTTPHEADER => [
        "Accept: application/json",
        "Api-Token: e0878a7792d0a33bd6e67e68a13c255289d64e978ef07e4feb223f2d4f5d4436a6f96b87"
      ],
      CURLOPT_POSTFIELDS => $payload
    ]);
    
    $response = curl_exec($ch);
    $err = curl_error($ch);
    
    curl_close($ch);
    
    
    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        $redirectURL = 'http://opedroaugusto.com.br/obrigado';
        header('Location: '. $redirectURL);
    }
}
?>