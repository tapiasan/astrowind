# Formspree Contact Form Setup Guide

This guide explains how to set up form submissions with Formspree for your contact form.

## What is Formspree?

Formspree is a simple, free form backend service that handles form submissions without requiring server-side code. It's perfect for static sites like AstroWind.

## Setup Steps

### 1. Create a Formspree Account

1. Visit [formspree.io](https://formspree.io)
2. Click "Sign up" and create a free account
3. Verify your email address

### 2. Create a New Form

1. Log in to your Formspree dashboard
2. Click "New Form"
3. Enter a name for your form (e.g., "Simmons Heating Contact Form")
4. Select your project
5. Click "Create"

### 3. Get Your Form ID

1. After creating the form, you'll see a form ID like `xyzpqrst`
2. Copy this ID

### 4. Update the Form Component

Edit `src/components/ui/Form.astro` and replace the form action URL:

```astro
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"></form>
```

Replace `YOUR_FORM_ID` with your actual Formspree ID from step 3.

### 5. Test the Form

1. Visit your contact page
2. Fill out the form with test data
3. Submit the form
4. Check your Formspree dashboard to verify the submission was received
5. You should also receive an email confirmation

### 6. Configure Email Notifications (Optional)

1. In your Formspree dashboard, go to form settings
2. Add your email address to receive form submissions
3. Enable email notifications
4. Customize the email template if desired

## Features

- **Free Plan**: Up to 50 submissions/month
- **Pro Plan**: Unlimited submissions, advanced features ($25/month)
- **Custom Domains**: Use your own email for submissions
- **Email Notifications**: Get notified instantly when someone submits the form
- **Spam Protection**: Formspree includes CAPTCHA and spam filtering

## Redirecting After Submission (Optional)

To redirect users after form submission, add:

```astro
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Your form fields -->

  <!-- Add this hidden input for redirect -->
  <input type="hidden" name="_next" value="/thank-you/" />
</form>
```

Then create a `/thank-you` page with a success message.

## Troubleshooting

**Form not submitting?**

- Ensure you've replaced `YOUR_FORM_ID` with your actual ID
- Check that form field `name` attributes are set correctly
- Verify your Formspree account is active

**Not receiving emails?**

- Check spam/junk folder
- Verify email in Formspree dashboard settings
- Enable email notifications in form settings

**Rate limiting?**

- Free plan has 50 submissions/month limit
- Upgrade to Pro for unlimited submissions

## Learn More

- [Formspree Documentation](https://formspree.io/docs)
- [Form Best Practices](https://formspree.io/guides)
