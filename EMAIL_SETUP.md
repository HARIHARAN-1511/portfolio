EMAIL setup & deployment guide
=================================

This repository includes a server-side contact endpoint in app/api/contact/route.ts which sends messages using SMTP (nodemailer). To make the contact form deliver messages to your Gmail account when deployed, follow these steps.

1) Local dev: .env.local
-------------------------
- Create a .env.local in the project root (DO NOT commit this file)
- Add the following values. For Gmail, create an "App Password" and use that for EMAIL_PASS.

```
EMAIL_USER=hariharan151104@gmail.com
EMAIL_PASS=<YOUR_GMAIL_APP_PASSWORD>
EMAIL_TO=hariharan151104@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
```

Notes:
- Enable 2-Step Verification on your Google account first.
- Create an App Password in Google -> Security -> App passwords and paste it into EMAIL_PASS.

2) Deploy (recommended host: Vercel)
----------------------------------
1. Push repo to GitHub.
2. Go to https://vercel.com and import your GitHub repository.
3. In the Vercel dashboard, open the Project Settings -> Environment Variables.
4. Add the same keys (EMAIL_USER, EMAIL_PASS, EMAIL_TO, SMTP_HOST, SMTP_PORT, SMTP_SECURE) and set them as Production environment variables.
5. Redeploy the project on Vercel.

Now the live contact form will POST to /api/contact and messages will be sent to the EMAIL_TO address.

3) Optional: dev testing without real Gmail (Ethereal)
----------------------------------------------------
If you don't want to use your real Gmail account for local tests you can create an ethereal test account or use Mailtrap. The contact route can be temporarily configured to use nodemailer.createTestAccount() for development and return the preview URL.

4) Troubleshooting & debug
--------------------------
- If you see "Server not configured" error => .env.local not present or missing keys.
- Check the terminal running `npm run dev` for stack traces / nodemailer auth errors.
- If Gmail blocks the attempt, check Google Account security activity — sign-in attempts will show and you can confirm App Password usage.
- Check Spam folder if messages don't appear in Primary tab.

5) Security
-----------
- Never commit .env.local or secrets to version control.
- Use environment variables in your hosting (Vercel) instead of committing them.

If you'd like, I can add a dev fallback to Ethereal so your local dev automatically uses a test mailbox when EMAIL_USER / EMAIL_PASS are missing. Want me to add that? 
