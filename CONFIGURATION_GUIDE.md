# Personal Website Configuration Guide

Welcome! This guide will help you customize your personal website based on the original template from [stevenf7/stevenf7.github.io](https://github.com/stevenf7/stevenf7.github.io).

## Project Overview

This is a **Gatsby-based portfolio website** built with:
- **Gatsby** - Static site generator
- **React** - Component framework
- **SCSS** - Styling
- **Bootstrap** - UI components
- **Framer Motion** - Animations

## What Was Changed

### 1. ✅ Publications → Volunteer Section
The "Publications" section has been renamed to "Volunteer" to showcase your volunteer experiences. Here's what was updated:

- Created new component: `src/components/Volunteer.js`
- Created new stylesheet: `src/styles/volunteer.scss`
- Updated `src/pages/index.js` to use Volunteer component
- Updated `src/data.js` with volunteer data structure
- Removed old Publications component reference

## How to Customize Your Website

### 📝 Edit Website Content

All your content is centralized in **`src/data.js`**. This makes it easy to update your website without editing components.

#### Main Sections in data.js:

1. **Personal Information**
   ```javascript
   name: { en: "Yahye Bashir" }
   headerParagraph: { en: "I am a Robotics Engineer..." }
   contactEmail: "yaxye2200@gmail.com"
   ```

2. **Navigation Labels**
   ```javascript
   nav: {
     home: { en: "Home"},
     work: { en: "Work"},
     projects: { en: "Projects"},
     contact: { en: "Contact"},
     resume: { en: "Resume"}
   }
   ```

3. **Education Section**
   ```javascript
   education: [
     {
       title: { en: "Bursa Technical University" },
       para: { en: "Master's of Applied Science..." },
       imageSrc: WaterlooLogo,
       workImg: WaterlooImg,
       url: "https://...",
       description: [...]
     }
   ]
   ```

4. **Work/Projects Section**
   ```javascript
   projects: [
     {
       title: { en: "Tesla" },
       position: { en: "Body Controls Developer - Tesla" },
       para: { en: "Developed lighting apps..." },
       imageSrc: TeslaIcon,
       url: "/work/tesla/",
       date: "05/2022 - 08/2022",
       description: [...],
       workImg: TeslaImg
     }
   ]
   ```

5. **Volunteer Section** (NEW!)
   ```javascript
   volunteer: [
     {
       id: 0,
       title: { en: "Your Role Title" },
       organization: { en: "Organization Name" },
       imageSrc: null, // Add image path
       projectLink: "#",
       type: "NGO", // or "Community", "Educational", "Environmental"
       description: { en: "Your description" }
     }
   ]
   ```

6. **Skills Section**
   ```javascript
   skills: [
     {
       img: clangIcon,
       para: "C, C++, C#, CUDA"
     }
   ]
   ```

7. **Social Links**
   ```javascript
   social: [
     { img: githubIcon, url: "https://github.com/yourprofile" },
     { img: linkedinIcon, url: "https://linkedin.com/in/yourprofile" }
   ]
   ```

### 🖼️ Manage Images

All images are stored in `src/images/` organized by category:

```
src/images/
├── skillsIcon/          # Skill icons (C_lang.png, ROS.jpg, etc.)
├── contactIcon/         # Social media icons
├── company/             # Company logos (Tesla.webp, NVIDIA.webp, etc.)
├── workPhotos/          # Work experience images/videos
├── school/              # Education logos and images
├── publications/        # Publication preview images (now use for volunteer)
├── backgroundIcons/     # Background decorative icons
├── ProjectPhotos/       # Project images
└── nvidia/              # NVIDIA-related media
```

#### To Add New Images:

1. **Place your image** in the appropriate folder in `src/images/`
2. **Import it in data.js**:
   ```javascript
   import MyImage from "./images/folder/myimage.png"
   ```
3. **Use it in data.js**:
   ```javascript
   imageSrc: MyImage,
   ```

#### Supported Image Formats:
- PNG (.png)
- WEBP (.webp) - Best for web
- JPG (.jpg)
- Video (.mp4, .webm, .mov)

### 🎨 Edit Styling

Each section has its own SCSS file in `src/styles/`:

```
src/styles/
├── mains.scss           # Main global styles
├── about.scss           # About section
├── work.scss            # Work section
├── education.scss       # Education section
├── volunteer.scss       # Volunteer section (NEW!)
├── projects.scss        # Projects section
├── skills.scss          # Skills section
├── header.scss          # Header styling
├── footer.scss          # Footer styling
├── navbar.scss          # Navigation bar
├── card.scss            # Card components
└── ...
```

To customize styling for Volunteer section, edit `src/styles/volunteer.scss`.

### 🌐 About Section

Edit the "About Me" paragraphs:

```javascript
aboutParaOne: {
  en: "I am a self-taught Robotics Engineer..."
},
aboutParaTwo: {
  en: "I earned my Bachelor's degree..."
},
aboutParaThree: {
  en: "When I'm not building robots..."
}
```

### 🎬 NVIDIA/Experience Section

Edit the main experience:

```javascript
nvidiaTime: {
  en: "2023 to Present"
},
nvidiaExperience: [
  {
    en: "Your experience description here..."
  }
]
```

### 🎪 Carousel Items

The NVIDIA section has carousel items that can be customized:

```javascript
nvidiaCarouselItems: [
  {
    media: "videoFileName",  // File name without extension
    type: 'video',          // or 'image'
    title: { en: "Title" },
    description: { en: "Description" }
  }
]
```

Similarly for projects carousel:

```javascript
projectsCarouselItems: [
  {
    media: "imageName",
    type: 'image',
    title: { en: "Project Title" },
    subtitle: { en: "Subtitle" },
    description: { en: "Description" },
    buttons: [
      { text: { en: "Read more" }, url: "https://..." }
    ]
  }
]
```

## Running the Website

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```
This starts Gatsby development server at `http://localhost:8000`

### 3. Build for Production
```bash
npm run build
```

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```
This automatically builds and deploys to your GitHub Pages

## Component Structure

### Key Components:

- **`Layout.js`** - Main layout wrapper
- **`Header.js`** - Hero section header
- **`About.js`** - About section
- **`NVIDIA.js`** - Experience section
- **`Education.js`** - Education background
- **`Volunteer.js`** - Volunteer experiences (NEW!)
- **`Work.js`** - Work history with details
- **`Projects.js`** - Projects showcase
- **`Skills.js`** - Technical skills
- **`Footer.js`** - Footer section
- **`Navbar.js`** - Navigation bar

All components use the `getText()` helper function for language support.

## Language Support

The website supports multiple languages. The `getText()` function in `data.js` handles language selection:

```javascript
getText({ en: "English text", es: "Spanish text" }, language)
```

Currently configured for English. You can add more languages by:

1. Adding language keys to text objects: `{ en: "...", es: "..." }`
2. Creating a language selector in `LanguageContext.js`

## Color Scheme & Styling

### Volunteer Card Type Colors:
- **NGO**: Green (#27ae60)
- **Community**: Blue (#2980b9)
- **Educational**: Red (#e74c3c)
- **Environmental**: Teal (#16a085)

### Main Colors (used throughout):
- Primary Blue: #3498db
- Dark Blue: #2980b9
- Light Background: #f8f9fa
- Text: #2c3e50

## Resume Page

Edit the resume page at `src/pages/resume.js` to customize your resume view.

## Work Experience Pages

Individual work experience pages are in `src/pages/work/`:
- `tesla.js`
- `nvidia.js`
- `ecobee.js`
- `ford.js`
- `khazanah.js`
- `uwaterloota.js`

You can create new ones following the same pattern.

## Deployment

### GitHub Pages Setup

1. Make sure your repository is at: `https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io`
2. The default branch should be set to `production`
3. Deploy with:
   ```bash
   npm run deploy
   ```
4. Your site will be live at: `https://YOUR_USERNAME.github.io`

### Manual Deployment

You can also manually build and deploy:
```bash
npm run build
# Then push the 'public' folder to your hosting
```

## Troubleshooting

### Website won't start
```bash
npm run clean
npm install
npm start
```

### Images not showing
- Check image path in `src/images/` folder
- Verify import statement in `data.js`
- Make sure file extension is correct

### Videos not playing
- Use `.mp4` format for better compatibility
- Keep videos short for faster loading
- Place in appropriate folder in `src/images/`

## Next Steps

1. **Update Personal Info**: Edit your name, email, and bio in `data.js`
2. **Add Volunteer Experiences**: Fill in the volunteer section with your experiences
3. **Replace Images**: Add your own images in `src/images/`
4. **Customize Colors**: Edit SCSS files in `src/styles/`
5. **Add Projects**: Update work and projects sections
6. **Deploy**: Run `npm run deploy` when ready

## Resources

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [React Documentation](https://react.dev/)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)

## Need Help?

- Check the original repository: https://github.com/stevenf7/stevenf7.github.io
- Review existing components for examples
- Test changes locally before deploying
- Use `npm run develop` for real-time feedback

---

**Happy customizing! 🚀**
