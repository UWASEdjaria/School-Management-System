<?php
require_once __DIR__ . '/db.php';
try {
    echo "--- Fixing Registration Schema ---\n";
    
    // Make extra columns nullable so registration doesn't fail
    $pdo->exec("ALTER TABLE users MODIFY COLUMN email VARCHAR(255) NULL");
    echo "✅ Column 'email' is now nullable.\n";
    
    $pdo->exec("ALTER TABLE users MODIFY COLUMN passwordHash VARCHAR(128) NULL");
    echo "✅ Column 'passwordHash' is now nullable.\n";
    
    $pdo->exec("ALTER TABLE users MODIFY COLUMN salt VARCHAR(32) NULL");
    echo "✅ Column 'salt' is now nullable.\n";
    
    $pdo->exec("ALTER TABLE users MODIFY COLUMN firstName VARCHAR(255) NULL");
    echo "✅ Column 'firstName' is now nullable.\n";
    
    $pdo->exec("ALTER TABLE users MODIFY COLUMN lastName VARCHAR(255) NULL");
    echo "✅ Column 'lastName' is now nullable.\n";
    
    echo "✅ Schema fix complete! Registration should work now.\n";
} catch (Exception $e) {
    echo "❌ Schema fix failed: " . $e->getMessage() . "\n";
}
?>
