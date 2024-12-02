export const Verification_Email_Template = `  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Verify Your Email</title>  
    <style>  
        body {  
            font-family: Arial, sans-serif;  
            margin: 0;  
            padding: 0;  
            background-color: #f4f4f4;  
        }  
        .container {  
            max-width: 600px;  
            margin: 30px auto;  
            background: #ffffff;  
            border-radius: 8px;  
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);  
            overflow: hidden;  
            border: 1px solid #ddd;  
        }  
        .header {  
            background-color: #007BFF;  
            color: #ffffff;  
            padding: 15px;  
            font-size: 18px;  
            text-align: center;  
        }  
        .content {  
            padding: 20px;  
            color: #333;  
        }  
        .verification-code {  
            display: inline-block;  
            background-color: #f4f4f4;  
            padding: 10px 15px;  
            border-radius: 4px;  
            font-size: 16px;  
            color: #007BFF;  
            font-weight: bold;  
            margin: 10px 0;  
        }  
        .footer {  
            background-color: #f4f4f4;  
            padding: 15px;  
            text-align: center;  
            color: #777;  
            font-size: 12px;  
            border-top: 1px solid #ddd;  
        }  
        p {  
            margin: 0 0 15px;  
        }  
    </style>  
</head>  
<body>  
    <div class="container">  
        <div class="header">Verify Your Email</div>  
        <div class="content">  
            <p>Hello,</p>  
            <p>Thank you for signing up! Please confirm your email address by entering the code below:</p>  
            <span class="verification-code">{verificationCode}</span>  
            <p>If you did not create an account, no further action is required. If you have any questions, feel free to contact us.</p>  
        </div>  
        <div class="footer">  
            <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>  
        </div>  
    </div>  
</body>  
</html>`;  



export const Welcome_Email_Template = `  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Welcome to Our Community</title>  
    <style>  
        body {  
            font-family: Arial, sans-serif;  
            margin: 0;  
            padding: 0;  
            background-color: #f4f4f4;  
            color: #333;  
        }  
        .container {  
            max-width: 600px;  
            margin: 30px auto;  
            background: #ffffff;  
            border-radius: 8px;  
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);  
            overflow: hidden;  
            border: 1px solid #ddd;  
        }  
        .header {  
            background-color: #007BFF;  
            color: #ffffff;  
            padding: 15px;  
            font-size: 18px;  
            text-align: center;  
        }  
        .content {  
            padding: 20px;  
            color: #333;  
        }  
        .footer {  
            background-color: #f4f4f4;  
            padding: 15px;  
            text-align: center;  
            color: #777;  
            font-size: 12px;  
            border-top: 1px solid #ddd;  
        }  
        p {  
            margin: 0 0 15px;  
        }  
    </style>  
</head>  
<body>  
    <div class="container">  
        <div class="header">Welcome to Our Community</div>  
        <div class="content">  
            <p>Hello, {name}</p>  
            <p>We’re thrilled to have you join our community! Feel free to explore, connect, and make the most of what we offer.</p>  
            <p>If you have any questions, don’t hesitate to reach out to us.</p>  
        </div>  
        <div class="footer">  
            <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>  
        </div>  
    </div>  
</body>  
</html>`;  

