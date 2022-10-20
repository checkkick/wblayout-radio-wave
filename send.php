$fio = $_POST['fio'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$comment = htmlspecialchars($comment);

$fio = urldecode($fio);
$email = urldecode($email);
$comment = urldecode($comment);

$fio = trim($fio);
$email = trim($email);
$comment = trim($comment);

if (mail("kost.anisimov.2012@yandex.ru", "Вопрос с сайта W-Wave", "ФИО:".$fio.". E-mail: ".$email ". Комментарий: ".$comment))
{
	echo "сообщение успешно отправлено";
} else {
	echo "при отправке сообщения возникли ошибки";
}
