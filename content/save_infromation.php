<?php
// Получение JSON-данных из запроса
$content = file_get_contents('php://input');

// Запись JSON-данных в файл content.json
file_put_contents('../beta/scripts/content.json', $content);
?>
