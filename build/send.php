<?
if((isset($_POST['question'])&&$_POST['question']!="")){
        $to = 'zhova24@gmail.com';
        $subject = 'ЦИПВС "КАНТОР"';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['question'].'</p>                       
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
