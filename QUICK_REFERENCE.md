# Quick Reference: Customizing Your Website

## 🎯 Most Common Tasks

### 1. Change Your Name
**File:** `src/data.js` (line ~19)
```javascript
name: {
  en: "Your Name Here"
},
```

### 2. Update Your Bio/Header
**File:** `src/data.js` (line ~22)
```javascript
headerParagraph: {
  en: "Your professional bio here"
},
```

### 3. Add Volunteer Experience
**File:** `src/data.js` (look for `volunteer:` array)
```javascript
volunteer: [
  {
    id: 0,
    title: { en: "Your Volunteer Title" },
    organization: { en: "Organization Name" },
    imageSrc: YourImage, // Add import at top if using image
    projectLink: "https://link-to-project.com", // or "#" for no link
    type: "NGO", // Choose: NGO, Community, Educational, Environmental
    description: { en: "What you did and learned" }
  }
]
```

### 4. Update Social Links
**File:** `src/data.js` (line ~700+)
```javascript
social: [
  { img: githubIcon, url: "https://github.com/YOUR_USERNAME" },
  { img: googleScholarIcon, url: "https://scholar.google.com/citations?user=YOUR_ID" },
  { img: linkedinIcon, url: "https://linkedin.com/in/YOUR_PROFILE" }
]
```

### 5. Add Your Skills
**File:** `src/data.js` (line ~650+)
```javascript
skills: [
  {
    img: clangIcon,
    para: "Your skill list here"
  }
]
```

### 6. Update Work Experience
**File:** `src/data.js` (look for `projects:` array)
```javascript
{
  title: { en: "Company Name" },
  position: { en: "Your Job Title" },
  para: { en: "Brief description" },
  imageSrc: CompanyIcon,
  url: "/work/company-name/",
  date: "MM/YYYY - MM/YYYY",
  description: [
    { en: "Achievement 1" },
    { en: "Achievement 2" }
  ],
  workImg: WorkImage
}
```

### 7. Update Education
**File:** `src/data.js` (look for `education:` array)
```javascript
{
  title: { en: "University Name" },
  para: { en: "Degree and specialization" },
  imageSrc: UniversityLogo,
  workImg: UniversityImage,
  url: "https://university.edu",
  description: [
    { en: "Detail 1" },
    { en: "Detail 2" }
  ]
}
```

## 📂 Important Files

| File | Purpose |
|------|---------|
| `src/data.js` | **ALL YOUR CONTENT** - Edit this file for all text changes |
| `src/components/Volunteer.js` | Volunteer section component |
| `src/styles/volunteer.scss` | Volunteer section styling |
| `src/pages/index.js` | Main page layout |
| `package.json` | Project dependencies and scripts |

## 🖼️ Image Management

### Add Images:
1. Place image in appropriate folder in `src/images/`
2. Import at top of `src/data.js`:
   ```javascript
   import MyImage from "./images/folder/myimage.png"
   ```
3. Use in data object:
   ```javascript
   imageSrc: MyImage,
   ```

### Image Folders:
- `skillsIcon/` - Skill icons
- `company/` - Company logos
- `school/` - University logos
- `workPhotos/` - Work experience images/videos
- `contactIcon/` - Social media icons
- `publications/` - Can use for volunteer images too

## 🚀 Commands

```bash
# Install dependencies
npm install

# Start development server (local testing)
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Clean build cache
npm run clean

# Format code
npm run format
```

## 🎨 Volunteer Types & Colors

Choose a type when adding volunteer experience:

| Type | Color | Use For |
|------|-------|---------|
| NGO | Green (#27ae60) | Non-profit organizations |
| Community | Blue (#2980b9) | Community service |
| Educational | Red (#e74c3c) | Teaching, tutoring |
| Environmental | Teal (#16a085) | Environmental projects |

## ⚙️ Useful Helpers

### getText() Function
Used throughout for language support:
```javascript
getText({ en: "English", es: "Español" }, language)
```

### Current Setup:
- **Default Language:** English (en)
- **Ready to add:** Spanish, French, Chinese, etc.

## 🔧 Local Testing Workflow

1. **Start dev server:**
   ```bash
   npm start
   ```

2. **Open in browser:**
   - http://localhost:8000
   - http://192.168.1.65:8000

3. **Make changes** to `src/data.js`

4. **Browser auto-refreshes** - no need to restart!

5. **Check results** on the running site

## 📱 Responsive Design

Your website automatically adapts to:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small phones (< 480px)

Test on different devices by resizing your browser!

## 🌐 Deployment Process

1. **Make all your changes locally**
2. **Test with `npm start`**
3. **Build:** `npm run build`
4. **Deploy:** `npm run deploy`
5. **Wait 1-2 minutes** for GitHub Pages to update
6. **Visit:** https://YOUR_USERNAME.github.io

## ❓ Common Issues & Solutions

**Website won't start?**
```bash
npm run clean && npm install && npm start
```

**Images not showing?**
- Check file path is correct
- Verify import statement in data.js
- Make sure file extension matches

**Styles looking weird?**
- Clear browser cache (Ctrl+Shift+Delete)
- Run `npm run clean` and `npm start`

**Changes not showing?**
- Wait 5 seconds for hot reload
- Check you're editing `src/data.js`
- Refresh browser (Ctrl+R)

## 📖 Structure Overview

```
src/
├── data.js                 ← EDIT THIS FOR CONTENT
├── components/             ← React components
│   ├── Volunteer.js        ← Your volunteer section
│   ├── Work.js
│   ├── Education.js
│   └── ...
├── styles/                 ← SCSS styling
│   ├── volunteer.scss
│   ├── work.scss
│   └── ...
├── pages/                  ← Page components
│   ├── index.js            ← Main page
│   ├── resume.js
│   └── work/
├── images/                 ← All your images
│   ├── company/
│   ├── workPhotos/
│   └── ...
└── contexts/               ← React context (language)
```

## 💡 Pro Tips

1. **Always test locally** before deploying
2. **Keep images optimized** - use .webp format when possible
3. **Use meaningful names** for images and files
4. **Backup your changes** to git regularly
5. **Keep descriptions concise** - they're more impressive
6. **Update your links** - external URLs, GitHub repos, etc.

---

**Need the full guide?** Check `CONFIGURATION_GUIDE.md` in the project root!
