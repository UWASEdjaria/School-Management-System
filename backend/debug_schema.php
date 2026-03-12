<?php
require_once __DIR__ . '/db.php';
try {
    $stmt = $pdo->query("DESCRIBE users");
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result, JSON_PRETTY_PRINT);
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
