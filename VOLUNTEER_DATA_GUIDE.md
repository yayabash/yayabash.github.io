# Volunteer Section Configuration Guide

## Overview
The Volunteer section now displays a single "Community" volunteer entry with a modal window that shows detailed information, media (images/videos), and descriptions - similar to the Internships section.

## Where to Edit Volunteer Information

All volunteer data is located in: **`src/data.js`** (lines 716-735)

## Data Structure

```javascript
volunteer: [
  {
    id: 0,
    title: {
      en: "Your Volunteer Role Title"
    },
    organization: {
      en: "Organization/Community Name"
    },
    imageSrc: null, // Image for the card (appears on hover)
    mediaSrc: null, // Video/Image for the modal details
    type: "Community",
    date: "MM/YYYY - MM/YYYY",
    description: {
      en: "Brief description shown on the card"
    },
    details: [
      {
        en: "Detailed bullet point #1 shown in the modal"
      },
      {
        en: "Detailed bullet point #2 shown in the modal"
      },
      {
        en: "Add more bullet points as needed"
      }
    ]
  }
]
```

## Field Descriptions

| Field | Purpose | Example |
|-------|---------|---------|
| `id` | Unique identifier | `0` |
| `title` | Volunteer role/position title | `{ en: "Community Volunteer Leader" }` |
| `organization` | Organization or community name | `{ en: "Local Community Center" }` |
| `imageSrc` | Image URL for the card background | `"./images/volunteer/community.jpg"` |
| `mediaSrc` | Video or image URL for modal details | `"./images/volunteer/community_video.mp4"` |
| `type` | Category (currently "Community") | `"Community"` |
| `date` | Duration of volunteer work | `"01/2023 - 12/2023"` |
| `description` | Short description (shown on card) | `{ en: "Organized community events and mentored youth" }` |
| `details` | Detailed bullet points (shown in modal) | Array of objects with `en` key |

## How to Add Your Community Volunteer Information

### Step 1: Prepare Your Media
Place your images/videos in: **`src/images/volunteer/`**
(You may need to create this folder if it doesn't exist)

### Step 2: Update src/data.js
Edit the volunteer section around line 716:

```javascript
volunteer: [
  {
    id: 0,
    title: {
      en: "Community Outreach Coordinator"
    },
    organization: {
      en: "Tech for Good Foundation"
    },
    imageSrc: require("./images/volunteer/community_card.jpg"), // or import it at top
    mediaSrc: require("./images/volunteer/community_demo.mp4"),
    type: "Community",
    date: "06/2022 - 12/2023",
    description: {
      en: "Organized coding workshops for underprivileged youth in the community"
    },
    details: [
      {
        en: "Designed and conducted 15+ coding workshops for over 100 students"
      },
      {
        en: "Created curriculum materials and mentored volunteer instructors"
      },
      {
        en: "Secured funding and partnerships with local businesses for program sustainability"
      },
      {
        en: "Achieved 85% course completion rate with 90% student satisfaction"
      }
    ]
  }
]
```

### Step 3: Import Media (Alternative Method)
If you prefer, import media at the top of `src/data.js`:

```javascript
// At the top of data.js, after other imports
import communityCardImage from "./images/volunteer/community_card.jpg"
import communityVideo from "./images/volunteer/community_demo.mp4"

// Then use in the data structure:
volunteer: [
  {
    // ... other fields
    imageSrc: communityCardImage,
    mediaSrc: communityVideo,
    // ... other fields
  }
]
```

## User Experience Flow

1. **Card View**: User sees a card with the background image (from `imageSrc`)
2. **Hover/Click**: Card shows the title, organization, and brief description
3. **"Explore More" Button**: Opens a modal window with:
   - Media display (video from `mediaSrc` or image)
   - Full volunteer role title
   - Organization name
   - Date range
   - Detailed bullet points from `details` array

## Optional: Multiple Volunteer Entries

To add more volunteer entries in the future, simply add more objects to the `volunteer` array:

```javascript
volunteer: [
  {
    id: 0,
    // ... first volunteer entry
  },
  {
    id: 1,
    title: { en: "Another Volunteer Role" },
    // ... more fields
  }
]
```

## Files That Were Updated

- **`src/data.js`**: Kept only the Community volunteer entry with expanded data structure
- **`src/components/Volunteer.js`**: Updated to use Card component and Modal (like Work/Internships section)
- **`src/components/modal.js`**: Enhanced to support volunteer data display
- **`src/styles/volunteer.scss`**: Styling remains compatible with the new structure

## Support for Media Types

The modal automatically detects and displays:
- **Images**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
- **Videos**: `.mp4`, `.webm`, `.mov`, `.avi`

Just provide the correct file path in `mediaSrc` and the component will handle it!

---

**Need help?** Check the Internships section (`src/data.js` projects array) for similar data structure examples.
