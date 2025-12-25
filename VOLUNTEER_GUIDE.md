# Volunteer Section Customization Examples

## Overview

The Volunteer section has been created to replace the Publications section. It displays your volunteer experiences in an attractive card format.

## How to Add Your Volunteer Experiences

### Step 1: Edit `src/data.js`

Find the `volunteer` array (around line 350-395) and replace the example entries with your own.

### Example 1: Simple Volunteer Role

```javascript
volunteer: [
  {
    id: 0,
    title: { en: "Environmental Education Coordinator" },
    organization: { en: "Local Environmental Center" },
    imageSrc: null, // No image for now
    projectLink: "#", // No external link
    type: "Environmental",
    description: { en: "Organized and led workshops on renewable energy and sustainability for local school groups" }
  }
]
```

### Example 2: With External Link

```javascript
{
  id: 1,
  title: { en: "Robotics Mentor" },
  organization: { en: "Youth Tech Academy" },
  imageSrc: null,
  projectLink: "https://youththecacademy.org", // Link to organization
  type: "Educational",
  description: { en: "Mentored high school students in robotics and programming" }
}
```

### Example 3: With Image

First, import the image at the top of `src/data.js`:

```javascript
import VolunteerImage1 from "./images/workPhotos/volunteer_example.webp"
```

Then use it in the data:

```javascript
{
  id: 2,
  title: { en: "Community Tech Support" },
  organization: { en: "Senior Center" },
  imageSrc: VolunteerImage1, // Using imported image
  projectLink: "#",
  type: "Community",
  description: { en: "Provided free tech support and training to senior citizens" }
}
```

## Volunteer Types and When to Use Them

### 🏢 NGO (Non-Governmental Organization)
**Color:** Green

Use for: Volunteering with non-profits, international organizations, relief work

**Example:**
```javascript
{
  title: { en: "Disaster Relief Volunteer" },
  organization: { en: "Red Crescent Society" },
  type: "NGO"
}
```

### 👥 Community
**Color:** Blue

Use for: Community service, local initiatives, neighborhood programs

**Example:**
```javascript
{
  title: { en: "Community Garden Organizer" },
  organization: { en: "Local Community Center" },
  type: "Community"
}
```

### 🎓 Educational
**Color:** Red

Use for: Teaching, tutoring, academic mentoring, training programs

**Example:**
```javascript
{
  title: { en: "STEM Tutor" },
  organization: { en: "Public School District" },
  type: "Educational"
}
```

### 🌱 Environmental
**Color:** Teal

Use for: Environmental projects, sustainability, climate action

**Example:**
```javascript
{
  title: { en: "Conservation Project Lead" },
  organization: { en: "National Park Service" },
  type: "Environmental"
}
```

## Adding Images to Volunteer Cards

### Option 1: Background Gradient (No Image)

```javascript
{
  id: 0,
  title: { en: "Volunteer Title" },
  organization: { en: "Organization" },
  imageSrc: null, // Will show gradient background
  projectLink: "#",
  type: "NGO"
}
```

The card will automatically show a purple gradient background.

### Option 2: With an Image

1. **Add your image to `src/images/workPhotos/` folder**
   - Name it something descriptive like: `volunteer_teaching.webp`
   - Use .webp format for best performance, or .png, .jpg

2. **Import it in `src/data.js`**
   ```javascript
   import VolunteerTeachingImg from "./images/workPhotos/volunteer_teaching.webp"
   ```

3. **Use it in the volunteer data**
   ```javascript
   {
     id: 0,
     title: { en: "Science Teacher Assistant" },
     organization: { en: "Lincoln High School" },
     imageSrc: VolunteerTeachingImg, // Add your image here
     projectLink: "https://lincolnhigh.edu",
     type: "Educational",
     description: { en: "Assisted with chemistry experiments and lab safety" }
   }
   ```

### Recommended Image Specifications

- **Size:** 800x600px or 16:9 aspect ratio
- **Format:** .webp (best), .png, or .jpg
- **File size:** Keep under 200KB for fast loading
- **Content:** Show action/people if possible for better visual impact

## Complete Working Example

Here's a full volunteer section with 3 entries:

```javascript
volunteer: [
  {
    id: 0,
    title: { en: "Robotics Mentor" },
    organization: { en: "FIRST Robotics Program" },
    imageSrc: null,
    projectLink: "https://www.firstinspires.org/robotics/frc",
    type: "Educational",
    description: { en: "Mentored high school students in robotics design and programming for the FIRST Robotics Competition" }
  },
  {
    id: 1,
    title: { en: "Community Tech Support" },
    organization: { en: "Local Senior Center" },
    imageSrc: null,
    projectLink: "#",
    type: "Community",
    description: { en: "Provided free technology training and support to seniors, teaching email, video calls, and basic computer skills" }
  },
  {
    id: 2,
    title: { en: "Environmental Education Coordinator" },
    organization: { en: "Urban Green Initiative" },
    imageSrc: null,
    projectLink: "https://urbangreeninitia.org",
    type: "Environmental",
    description: { en: "Organized sustainability workshops and led community tree-planting events in partnership with local schools" }
  }
]
```

## Styling and Customization

### Change Button Text

The button currently says "Learn More". To change it, find the button text in `src/components/Volunteer.js`:

```javascript
{getText({ en: "Learn More" }, language)}
```

Change to:

```javascript
{getText({ en: "Visit Website" }, language)}
```

### Change Button Color

Edit `src/styles/volunteer.scss` around line 140:

```scss
.btn {
  background: linear-gradient(135deg, #27ae60, #229954); // Green for NGO
  
  &:hover {
    background: linear-gradient(135deg, #229954, #1e8449);
  }
}
```

You can change to any color. Some suggestions:
- **Blue**: `#3498db` → `#2980b9`
- **Purple**: `#9b59b6` → `#8e44ad`
- **Orange**: `#e67e22` → `#d35400`

### Change Card Height

The cards are currently 400px tall. To make them taller or shorter, edit `src/styles/volunteer.scss`:

```scss
.volunteer-card {
  height: 400px; // Change this value
}
```

## Multiple Volunteer Entries

You can add as many volunteer entries as you want. The grid will automatically adjust:

- **Desktop:** 3 cards per row
- **Tablet:** 2 cards per row
- **Mobile:** 1 card per row

Just keep adding to the array:

```javascript
volunteer: [
  { id: 0, ... },
  { id: 1, ... },
  { id: 2, ... },
  { id: 3, ... }, // Will wrap to next row on desktop
  { id: 4, ... },
  // Add as many as you want!
]
```

## Advanced: Adding Video to Volunteer Cards

Similar to work experience, you can add videos:

1. **Add video to `src/images/workPhotos/`**
2. **Import in `src/data.js`:**
   ```javascript
   import VolunteerVideo from "./images/workPhotos/volunteer_activity.mp4"
   ```
3. **Use as imageSrc:**
   ```javascript
   {
     id: 0,
     imageSrc: VolunteerVideo, // This will automatically be treated as video
     ...
   }
   ```

## Testing Your Changes

1. **Start dev server:**
   ```bash
   npm start
   ```

2. **Open browser to:**
   ```
   http://localhost:8000/?lang=en
   ```

3. **Scroll to Volunteer section**

4. **Make changes** to `src/data.js` - page auto-reloads!

## Common Mistakes to Avoid

❌ **Don't:**
```javascript
volunteer: [ // Wrong - missing comma after array
  { id: 0, ... }
  { id: 1, ... } // Error!
]
```

✅ **Do:**
```javascript
volunteer: [
  { id: 0, ... }, // Comma here!
  { id: 1, ... }
]
```

❌ **Don't:**
```javascript
title: "Volunteer Title" // Wrong - string not object
```

✅ **Do:**
```javascript
title: { en: "Volunteer Title" } // Object with language key
```

❌ **Don't:**
```javascript
projectLink: "no-http", // Won't open properly
```

✅ **Do:**
```javascript
projectLink: "https://website.com" // Include protocol
```

## Tips for Great Volunteer Entries

1. **Be specific:** Instead of "helped people", say "Taught coding basics to 50+ high school students"
2. **Show impact:** "Organized 12 community events serving 300+ people"
3. **List responsibilities:** "Curriculum design, student mentoring, event coordination"
4. **Use action verbs:** "Organized", "Led", "Coordinated", "Developed", "Trained"
5. **Include outcomes:** "Improved student engagement by 40%", "Successfully placed 20+ graduates"

## Next Steps

1. **Update your entries:** Replace example data with your volunteer experiences
2. **Add images:** Create a folder and add photos if desired
3. **Test locally:** Run `npm start` and check the Volunteer section
4. **Deploy:** Run `npm run deploy` when satisfied

---

**Questions?** Check `CONFIGURATION_GUIDE.md` for more details!
