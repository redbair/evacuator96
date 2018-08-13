<?php

/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$message = htmlspecialchars($_POST["message"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);
$type = htmlspecialchars($_POST["type"]);

/* Ваш адрес и тема сообщения */
$address = "055810@mail.ru";
$sub = "Заказ звонка";

/* Формат письма */
$mes = "Заказ звонка\n
Имя отправителя: $name 
Телефон отправителя: $tel
Тип транспорта: $type";


if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from = "Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
	header('Refresh: 5; URL=http://autoekb66.ru');
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Заявка принята, переходим на главную страницу!</body>';}
else {
	header('Refresh: 5; URL=http://autoekb66.ru');
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Заявка не принята, переходим на главную страницу!</body>';}
}
exit; /* Выход без сообщения, если поле bezspama чем-то заполнено */
?>