# Deploy Guide (cPanel / FTP)

This website is fully compatible with shared hosting that supports static files and PHP.

## Folder to Upload

Upload **everything inside `public_html`** to your hosting account's `public_html` directory.

## cPanel File Manager Steps

1. Open cPanel.
2. Go to **File Manager**.
3. Open your server `public_html` directory.
4. Upload these files/folders:
   - `index.html`
   - `about.html`
   - `products.html`
   - `contact.html`
   - `contact.php`
   - `assets/` folder
5. Visit your domain to verify pages load.

## FTP Steps

1. Connect with FileZilla (or any FTP client).
2. Open remote folder: `public_html`.
3. Upload all files from local `public_html` folder.

## Contact Form Notes

- Current form posts to `contact.php` (PHP mail).
- Email destination is set to: `17sharmadh@gmail.com`.
- If your host blocks `mail()`, replace form action in `contact.html` with a third-party endpoint like FormSubmit.

## No Build Required

- No Node.js
- No React server code
- No Python/FastAPI
- No compile/build step

Just upload and run.
