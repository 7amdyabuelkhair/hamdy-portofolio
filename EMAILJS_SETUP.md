# EmailJS Setup Guide for Contact Form

This guide will walk you through setting up EmailJS to make your contact form send emails directly from your website.

## Step 1: Sign Up for EmailJS

1. Go to **https://www.emailjs.com/**
2. Click on **"Sign Up"** or **"Get Started"**
3. You can sign up using:
   - Google account (recommended - fastest)
   - GitHub account
   - Email and password
4. Complete the registration process
5. Verify your email if required

## Step 2: Create an Email Service

An email service connects EmailJS to your email provider (Gmail, Outlook, etc.).

1. **Log in** to your EmailJS dashboard
2. Go to **"Email Services"** in the left sidebar (or click **"Add New Service"**)
3. Click **"Add New Service"**
4. Choose your email provider:
   - **Gmail** (recommended if you use Gmail)
   - **Outlook**
   - **Yahoo**
   - **Custom SMTP** (for other providers)
5. For **Gmail**:
   - Click **"Connect Account"**
   - Sign in with your Gmail account (hamdyabuelkhair@gmail.com)
   - Authorize EmailJS to send emails on your behalf
6. Give your service a name (e.g., "Portfolio Contact Form")
7. Click **"Create Service"**
8. **Copy your Service ID** - you'll need this later (it looks like: `service_xxxxxxxxx`)

## Step 3: Create an Email Template

A template defines what the email will look like and which form fields to include.

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Fill in the template details:

   **Template Name:**
   - Name it something like "Portfolio Contact Form"

   **Subject:**
   - This is the email subject line
   - Example: `New Contact Form Submission from {{from_name}}`
   - Or simply: `New Contact Form: {{subject}}`

   **Content (Email Body):**
   ```
   You have received a new message from your portfolio contact form.

   Name: {{from_name}}
   Email: {{from_email}}
   Location: {{location}}
   Budget: {{budget}}
   Subject: {{subject}}

   Message:
   {{message}}

   ---
   This email was sent from your portfolio contact form.
   ```

   **Important:** The variables in double curly braces `{{variable_name}}` must match the field names in your form:
   - `{{from_name}}` - Name field
   - `{{from_email}}` - Email field
   - `{{location}}` - Location field
   - `{{budget}}` - Budget field
   - `{{subject}}` - Subject field
   - `{{message}}` - Message field

4. **To Email:** Enter your email address: `hamdyabuelkhair@gmail.com`
5. **From Name:** You can use `{{from_name}}` or a static name like "Portfolio Contact Form"
6. **From Email:** This will be the email from your service (usually your Gmail)
7. Click **"Save"**
8. **Copy your Template ID** - you'll need this later (it looks like: `template_xxxxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar (or click your profile icon)
2. Scroll down to **"API Keys"** section
3. You'll see your **Public Key** (it looks like: `xxxxxxxxxxxxxxxxxxxxxxxx`)
4. **Copy this Public Key** - you'll need it

## Step 5: Create Environment Variables File

1. In your project root folder (`C:\Users\Administrator\Desktop\portofolio`), create a new file named `.env`
2. Add the following content (replace with your actual values):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_def456uvw
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnopqrstuvwxyz123456
```

3. **Important:** 
   - Replace `your_service_id_here` with your actual Service ID from Step 2
   - Replace `your_template_id_here` with your actual Template ID from Step 3
   - Replace `your_public_key_here` with your actual Public Key from Step 4
   - Do NOT use quotes around the values
   - Do NOT add spaces around the `=` sign

## Step 6: Restart Your Development Server

After creating the `.env` file:

1. **Stop** your current development server (press `Ctrl+C` in the terminal)
2. **Start** it again:
   ```bash
   npm run dev
   ```
3. The environment variables will now be loaded

## Step 7: Test Your Contact Form

1. Open your portfolio website
2. Navigate to the Contact section
3. Fill out the form with test data
4. Click "Submit"
5. Check your email inbox (hamdyabuelkhair@gmail.com)
6. You should receive the email within a few seconds!

## Troubleshooting

### Form still uses mailto fallback
- Make sure your `.env` file is in the project root folder
- Make sure variable names start with `VITE_`
- Restart your development server after creating/modifying `.env`
- Check that there are no typos in the variable names or values

### Email not received
- Check your spam/junk folder
- Verify your email service is connected correctly in EmailJS dashboard
- Check the EmailJS dashboard for error logs
- Make sure the template variables match the form field names

### Environment variables not loading
- In Vite, environment variables must start with `VITE_` to be exposed to the client
- Make sure you're using `import.meta.env.VITE_EMAILJS_...` (which we already have in the code)
- Restart the dev server after changing `.env` file

## EmailJS Free Plan Limits

- **200 emails per month** (free plan)
- This should be plenty for a portfolio contact form
- If you need more, you can upgrade to a paid plan

## Security Note

- The Public Key is safe to expose in client-side code (it's designed for that)
- Never share your Private Key (if you have one)
- The Service ID and Template ID are also safe to expose

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: Check their help center or community forum

---

**Quick Checklist:**
- [ ] Signed up for EmailJS account
- [ ] Created an Email Service and copied Service ID
- [ ] Created an Email Template and copied Template ID
- [ ] Copied Public Key from Account settings
- [ ] Created `.env` file with all three values
- [ ] Restarted development server
- [ ] Tested the contact form

