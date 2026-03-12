<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/db.php';

echo "--- Testing Registration Fix ---\n";
$testData = [
    'username' => 'test_user_' . time(),
    'password' => 'password123',
    'role' => 'Student'
];

$result = register($testData, $pdo);
echo json_encode($result, JSON_PRETTY_PRINT) . "\n";
?>
