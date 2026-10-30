# SEAL — E-foil Drone promotional website

A responsive, single-page static website for SEAL and the E-foil Drone (EFD) concept.

## Important content note
SEAL is under formation. The E-foil Drone is at idea / early engineering study stage. All displayed mass, payload, range and cruise figures are preliminary design objectives only, not verified product specifications or demonstrated performance.

## Folder contents

- `index.html` — page structure and website copy
- `styles.css` — layout, responsive styling and 3D-like effects
- `script.js` — navigation, scroll reveals and hero image tilt
- `assets/seal-efd-hero.png` — generated concept visual
- `assets/favicon.svg` — browser tab icon

## Before publishing
1. Open `index.html` in Notepad or VS Code.
2. Search for `REPLACE_WITH_YOUR_EMAIL`.
3. Replace it with the founder's real email address, e.g. `founder@yourdomain.com`.
4. Review the founder name and all concept wording.
5. Do not remove the early-stage / unvalidated-target disclaimers unless the engineering status changes.

## Windows CMD: open the website locally

### Option A — Python local server
1. Install Python from https://www.python.org/downloads/windows/ if `py` is not recognised.
2. During Python installation, enable **Add Python to PATH**.
3. Open CMD.
4. Change directory to this folder. Example if it is on the Desktop:

```cmd
cd %USERPROFILE%\Desktop\SEAL-EFD-Website
```

5. Start the local web server:

```cmd
py -m http.server 8000
```

6. Open this address in Chrome:

```text
http://localhost:8000
```

7. Keep the CMD window open while testing. Press `CTRL + C` in CMD to stop the server.

### Option B — no server
Double-click `index.html`. Most page features work directly from the file. The Python server is preferred for a more realistic local test.

## Free deployment: Cloudflare Pages (recommended)

Cloudflare Pages supports static HTML sites and offers direct upload. For the fastest first deployment:

1. Create a Cloudflare account at https://dash.cloudflare.com/sign-up.
2. Verify your email and sign in.
3. Open **Workers & Pages** from the dashboard.
4. Choose **Create application**.
5. Select **Pages** / **Get started** and choose **Drag and drop your files** (the exact labels may vary).
6. Project name: `seal-efd` (or another available name).
7. Drag the complete `SEAL-EFD-Website` folder into the upload area. If the dashboard requests a ZIP, upload the ZIP file instead.
8. Click **Deploy site**.
9. Cloudflare will provide a public address similar to `https://seal-efd.pages.dev`.
10. Open that address on your phone and computer to test it.

### Updating the website later
For a direct-upload project, make the edits locally, then use **Create a new deployment** in the Cloudflare Pages project and upload the updated folder/ZIP again. Direct upload does not automatically sync from GitHub. If you want automatic deployments from Git pushes, create a separate Pages project using Git integration instead.

## Optional CMD deployment using Wrangler

This route is useful if you want to redeploy from CMD.

1. Install Node.js LTS from https://nodejs.org.
2. Close and reopen CMD.
3. Check installation:

```cmd
node -v
npm -v
```

4. Change to the website folder:

```cmd
cd %USERPROFILE%\Desktop\SEAL-EFD-Website
```

5. Start Cloudflare authentication:

```cmd
npx wrangler login
```

A browser window will open. Sign in and authorise Wrangler.

6. Create the Pages project:

```cmd
npx wrangler pages project create seal-efd
```

If prompted, choose `main` as the production branch.

7. Deploy the current folder:

```cmd
npx wrangler pages deploy . --project-name=seal-efd
```

8. Copy the deployment URL shown in CMD and open it in your browser.

If Wrangler reports that the project already exists, skip the create command and run the deploy command again.

## GitHub-connected deployment (for automatic updates)

1. Create a GitHub account at https://github.com.
2. Create a new empty repository named `seal-efd-website`.
3. Install Git for Windows from https://git-scm.com/download/win.
4. Open CMD and run:

```cmd
cd %USERPROFILE%\Desktop\SEAL-EFD-Website
git init
git add .
git commit -m "Initial SEAL EFD website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/seal-efd-website.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. GitHub may open a browser to authenticate.

5. In Cloudflare, go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
6. Authorise GitHub and select `seal-efd-website`.
7. Set production branch to `main`.
8. For this plain HTML website, set the build command to `exit 0` and the build output directory to `/` or the repository root, as requested by the current dashboard form.
9. Save and deploy. Future pushes to `main` will trigger deployments.

## Common CMD issues

- `'py' is not recognized`: install Python and reopen CMD, or try `python -m http.server 8000`.
- `'git' is not recognized`: install Git for Windows and reopen CMD.
- `'node' is not recognized`: install Node.js LTS and reopen CMD.
- Port 8000 is busy: use `py -m http.server 8080` and visit `http://localhost:8080`.
- Hero image missing: confirm `assets\seal-efd-hero.png` exists and that the folder structure has not been changed.

## Suggested one-hour schedule

- 0–10 min: extract folder, edit contact email, preview locally.
- 10–20 min: review page on desktop and mobile; fix any wording.
- 20–35 min: create Cloudflare account and deploy using drag-and-drop.
- 35–45 min: test public URL and share it.
- 45–60 min: optional GitHub setup for easier future updates.
