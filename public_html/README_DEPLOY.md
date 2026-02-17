# Static Deployment Guide - Samrat Sharma Furniture

This website is 100% static and works on:
- Shared hosting (cPanel / FTP)
- Render Static Site
- Any static hosting platform

It uses only:
- HTML
- CSS
- JavaScript

No PHP, Node.js, Python, or build step is required.

## Project Structure

```text
public_html/
  index.html
  about.html
  products.html
  contact.html
  assets/
    css/
      styles.css
    js/
      main.js
    images/
      furniture.svg
      hardware.svg
      plywood.svg
```

## Contact Form Setup (FormSubmit)

The contact form in `contact.html` submits to:
`https://formsubmit.co/17sharmadh@gmail.com`

Setup steps:
1. Deploy the site once.
2. Submit the contact form.
3. Open `17sharmadh@gmail.com` inbox and confirm the FormSubmit activation email.
4. After activation, all new form entries will come to this email.

Optional:
1. If you want captcha, set `_captcha` to `true` in `contact.html`.
2. If you want a custom thank-you page, change the `_next` hidden input in `contact.html`.

## Deploy via cPanel File Manager

1. Open cPanel -> File Manager.
2. Open server folder `public_html`.
3. Upload all files from your local `public_html` folder.
4. Ensure `index.html` is directly inside server `public_html`.
5. Visit your domain and test all pages and form.

## Deploy via FTP (FileZilla)

1. Connect to hosting with FTP credentials.
2. Open remote folder `public_html`.
3. Upload local `public_html` contents.
4. Overwrite old files if prompted.

## Deploy on Render (Static Site)

1. Push this project to GitHub.
2. In Render dashboard: `New +` -> `Static Site`.
3. Connect your GitHub repo.
4. Set:
   - Build Command: leave empty
   - Publish Directory: `public_html`
5. Click `Create Static Site`.
6. Test all pages and submit the contact form once for FormSubmit activation.
