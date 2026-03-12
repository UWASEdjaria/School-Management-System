<?php
require_once __DIR__ . '/db.php';
try {
    echo "--- Migrating Database ---\n";
    
    // Check for username column
    $stmt = $pdo->query("DESCRIBE users");
    $columns = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $columnNames = array_column($columns, 'Field');

    if (!in_array('username', $columnNames)) {
        echo "Adding 'username' column...\n";
        $pdo->exec("ALTER TABLE users ADD COLUMN username VARCHAR(50) UNIQUE AFTER id");
        // Backfill username with email if it exists
        if (in_array('email', $columnNames)) {
            $pdo->exec("UPDATE users SET username = email WHERE username IS NULL");
        }
    }

    if (!in_array('password', $columnNames)) {
        echo "Adding 'password' column...\n";
        $pdo->exec("ALTER TABLE users ADD COLUMN password VARCHAR(128) AFTER username");
        // We can't backfill passwords because hashing is different
    }

    echo "✅ Migration complete!\n";
} catch (Exception $e) {
    echo "❌ Migration failed: " . $e->getMessage() . "\n";
}
?>
