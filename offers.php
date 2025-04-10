<?php
session_start();

// যদি সেশন না থাকে, তাহলে লগইন পেজে রিডাইরেক্ট করা হবে
if (!isset($_SESSION['member_id'])) {
    header("Location: login.php");
    exit();
}

// লগ আউট করার ফাংশন
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: index.html");
    exit();
}

$member_name = $_SESSION['member_name'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Special Offers</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #ff9a9e, #fad0c4);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            flex-direction: column;
        }

        .offer-container {
            background-color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            width: 400px;
            animation: fadeIn 0.5s ease-in-out;
            text-align: center;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h2 {
            color: #ff5e62;
            margin-bottom: 20px;
        }

        .offers {
            margin-bottom: 20px;
        }

        .offer {
            background: #ff7b50;
            color: white;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 10px;
            font-weight: bold;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .logout-button {
            background-color: #ff5e62;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            text-decoration: none;
            font-size: 16px;
            transition: background 0.3s;
        }

        .logout-button:hover {
            background-color: #ff3b3f;
        }
    </style>
</head>
<body>
    <div class="offer-container">
        <h2>Welcome, <?php echo $member_name; ?>!</h2>
        <p>Here are some exclusive offers just for you:</p>

        <div class="offers">
            <div class="offer">Offer 1: 20% off on your next purchase!</div>
            <div class="offer">Offer 2: Free shipping on orders over $50!</div>
            <div class="offer">Offer 3: Buy one get one free on selected items!</div>
            <div class="offer">Offer 4: 15% off on memberships for a limited time!</div>
            <div class="offer">Offer 5: Special discount on your birthday month!</div>
        </div>

        <a href="?logout=true" class="logout-button">Logout</a>
    </div>
</body>
</html>
