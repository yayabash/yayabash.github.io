// Skills Icons
import clangIcon from "./images/skillsIcon/C_lang.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.svg"
import SolidworksIcon from "./images/skillsIcon/CAD.svg"
import codeIcon from "./images/skillsIcon/code.svg"
import isaacsIcon from "./images/skillsIcon/isaacsim.png"
import linuxGitIcon from "./images/skillsIcon/linux_git_icon.png"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"
import googleScholarIcon from "./images/contactIcon/gscholar.png"


// Company icon
import TeslaIcon from "./images/company/Tesla.webp"
import NVIDIAIcon from "./images/company/NVIDIA.webp"
import EcobeeIcon from "./images/company/ecobee.webp"
import UwaterlooIcon from "./images/company/Uwaterloo.webp"
import KhazanahIcon from "./images/company/Khazanah.webp"
import FordIcon from "./images/company/Ford.webp"

// company image
import TeslaImg from "./images/workPhotos/TeslaWork_v2.mp4"
import IsaacSim from "./images/workPhotos/isaac_quadruped.mp4"
import Khazanah from "./images/workPhotos/khazanah.mp4"
import uwaterloo from "./images/workPhotos/uwaterlootaImg.webp"
import ford from "./images/workPhotos/Ford.webp"
import ecobee from "./images/workPhotos/ecobeeProduct.webp"

// Internship images
import DroneMarketCover from "./images/company/dronemarket_2.jpg"
import DroneMarketVideo from "./images/company/drone market.mp4"
import KarabukTeknokentImg from "./images/workPhotos/Karabük Teknokent.webp"
import SerhatHaddecilikImg from "./images/workPhotos/Serhat Haddecilik.webp"
import SerhatHaddecilikInsideImg from "./images/workPhotos/Serhat Haddecilik_inside_img.webp"

// School images
import WaterlooLogo from "./images/school/University-of-Waterloo.png"
import RotekLabImg from "./images/school/university_lab_ROTEK.webp"
import AirLabLogo from "./images/school/airlab_logo_extended.jpg"
import StanfordLogo from "./images/school/stanford.webp"
import WaterlooImg from "./images/school/waterloo_eng_img.webp"
import AirLabImg from "./images/school/airlab_img.webp"
import StanfordImg from "./images/school/stanford_img.webp"

// Project image for color-based sorting arm
import colorSortArmImg from "./images/ProjectPhotos/3-DOF Robotic Arm for Color-Based Box Sorting.webp"

// Certification images
import EthAmrx from "./images/certifications/AMRx_course.webp"
import MlSpecialization from "./images/certifications/ML_specialization.png"

// Volunteer images
import VolunteerCoverImg from "./images/workPhotos/uhsst.png"
import VolunteerModalImg from "./images/workPhotos/volunteer.png"

// Helper function for getting text in current language
export const getText = (textObj, language = 'en') => {
  // If it's already a string, return as-is (backward compatibility)
  if (typeof textObj === 'string') return textObj;
  
  // If it's an object with language keys, return the appropriate language
  if (textObj && typeof textObj === 'object') {
    return textObj[language] || textObj.en || Object.values(textObj)[0] || '';
  }
  
  // Fallback
  return textObj || '';
};

const siteData = {

 
  name: {
    en: "Yahye Bashir"
  },
 
  headerParagraph: {
    en: "I am a Robotics Engineer & AI Researcher passionate about developing, deploying and bringing robotic systems to life"
  },

  // Navigation labels
  nav: {
    home: { en: "Home"},
    work: { en: "Work"},
    projects: { en: "Projects"},
    contact: { en: "Contact"},
    resume: { en: "Resume"}
  },

  // Section titles  
  sections: {
    about: { en: "About" },
    nvidia: { en: "MORIA"},
    volunteer: { en: "Volunteer" },
    certifications: { en: "Certifications" },
    education: { en: "Education"},
    internships: { en: "Internships"},
    projects: { en: "Projects"},
    skills: { en: "Skills"},
    contact: { en: "Contact"}
  },

  // Button text translations
  buttons: {
    explore: { en: "Explore"},
    readMore: { en: "Read More"},
    close: { en: "Close"}
  },

  contactEmail: "yaxye2200@gmail.com",

  education: [
    {
      title: {
        en: "Bursa Technical University"
      },
      para: {
        en: "Master's of Applied Science in Mechatronics Engineering(ROBOTICS), with Distinction"
      },
      imageSrc: WaterlooLogo,
      workImg: null,
      url: "https://mdbf.btu.edu.tr/mekatronik",
      description: [
        {
          en: "GPA: 3.13, specialized in robotics, artificial intelligence, control systems, and embedded systems"
        },
      ],
    },
    {
      title: {
        en: "ROBOT TECHNOLOGIES AND INTELLIGENT SYSTEMS RESEARCH CENTER (ROTASAM)"
      },
      para: {
        en: "Developed autonomous manipulation capabilities for the Moria robot, focusing on high-fidelity simulation and control integration. Built and maintained the robot's digital twin in Isaac Sim and integrated dual-arm/multi-finger hand systems with MoveIt 2, creating a robust software-in-the-loop pipeline using ros2_control and topic-based interfaces."
      },
      imageSrc: RotekLabImg,
      workImg: null,
      url: "https://robot.btu.edu.tr/",
      description: [
        {
          en: "Led simulation and control integration for the Moria robot in Isaac Sim and ROS 2."
        },
        {
          en: "Developed digital twin, integrated MoveIt 2, and validated grasping/coordination policies."
        },
        {
          en: "Created software-in-the-loop pipeline for dual-arm and multi-finger hand systems."
        }
      ],
    },
    {
      title: {
        en: "Northwestern University"
      },
      para: {
        en: "Modern Robotics Specialization (In Progress)"
      },
      imageSrc: StanfordLogo,
      workImg: null,
      url: "https://www.coursera.org/specializations/modernrobotics",
      description: [
        {
          en: "A comprehensive Coursera specialization covering the foundations of robotics, including kinematics, dynamics, control, and motion planning. Taught by Professor Kevin Lynch at Northwestern University."
        },
        {
          en: "Courses: Foundations of Robot Motion, Robot Kinematics, Robot Dynamics, Robot Control, Robot Planning and Estimation, and a capstone project on mobile manipulation."
        },
        {
          en: "Focuses on both theoretical concepts and hands-on mathematical modeling and practical simulation/programming exercises."
        }
      ],
    }
  ],

  projects: [
    {
      title: {
        en: "Mechanical Engineering Intern"
      }, 
      position: {
        en: "Mechanical Engineering Intern - Drone Market"
      },
      para: {
        en: "Drone maintenance, calibration, and troubleshooting"
      },
      imageSrc: DroneMarketCover,
      
      url: "/work/",

      date: "09/2022 - 10/2022",
      location: "Sakarya, Türkiye",

      description: [
        {
          en: "Drone maintenance, calibration, and troubleshooting"
        },
        {
          en: "Worked on drone programming & flight control systems"
        }
      ],

      workImg: DroneMarketVideo,
    },
    {
      title: {
        en: "Control Engineer Intern"
      }, 
      position: {
        en: "Control Engineer Intern - Karabük Teknokent"
      },
      para: {
        en: "Modeled helicopter flight physics and designed automatic control systems"
      },
      imageSrc: KarabukTeknokentImg,
   
      url: "/work/",
      
      date: "08/2022 - 09/2022",
      location: "Karabük, Turkey",

      description: [
        {
          en: "Modeled a helicopter's flight physics in MATLAB/Simulink to understand and improve its stability"
        },
        {
          en: "Designed and implemented an automatic control system to keep the helicopter stable and responsive"
        },
        {
          en: "Improved system stability and response time by 20%, validated through simulation and 3D visualization using 3D flight tests"
        }
      ],
      
      workImg: null,
    },

    {
      title: {
        en: "Mechanical Engineering Intern"
      }, 
      position: {
        en: "Mechanical Engineering Intern - Serhat Haddecilik"
      },
      para: {
        en: "Iron and steel processing and production operations"
      },
      imageSrc: SerhatHaddecilikImg,
     
      url: "/work/",

      date: "09/2022 - 10/2022",
      location: "Karabük, Turkey",

      description: [
        {
          en: "Applied the various stages of metal production, including melting, casting, rolling and finishing"
        },
        {
          en: "Observed quality control measures to ensure product standards"
        },
        {
          en: "Understood the iron and steel processing flow chart and workflow"
        },
        {
          en: "Gained understanding of the workflow and operations of a large-scale manufacturing facility"
        }
      ],
   
      workImg: SerhatHaddecilikInsideImg,
    
    },


  ],

// About Section --------------
aboutParaOne: {
  en: "I am a A self-taught Robotics Engineer with hands-on experience in designing, developing, and deploying robotic systems. Proficient in ROS2, AI/ML, reinforcement learning, computer vision, UAVs, humanoids, quadrupeds, and Nvidia Isaac Sim/Isaac Lab. Strong team player with a passion for innovation, learning, and real-world problem-solving."
},
aboutParaTwo: {
  en: "I earned my Bachelor's degree in mechanical Engineering. I am currently pursuing an M.Sc. in Mechatronics Engineering at Bursa Technical University, moreover I am also currently completing the Modern Robotics Specialization from Northwestern University via Coursera"},
aboutParaThree: {
  en: "When I'm not building robots, you can find me playing with demos, learning more about new researches, or exploring ..."
},

nvidiaTime: {
  en: "2025 to Present"
},

nvidiaExperience: [
  {
    en: "At Bursa Technical University's ROBOT TECHNOLOGIES AND INTELLIGENT SYSTEMS RESEARCH CENTER (ROTASAM), I am developing the autonomous manipulation capabilities for the Moria robot. My work is focused on two key areas: high-fidelity simulation and control integration. In simulation, I am responsible for building and maintaining the robot's digital twin in Gazebo/Isaac Sim. For control, I am integrating its dual-arm and multi-finger hand systems with the MoveIt 2 framework and generated Moveit MTC, creating a robust software-in-the-loop (SIL) pipeline that uses ros2_control and topic-based interfaces to deploy, test, and validate complex grasping and coordination policies within the ROS 2 ecosystem."
  }
],

// NVIDIA Carousel Items
nvidiaCarouselItems: [
  {
    media: "gr1ImitationVideo",
    type: 'video',
    title: {
      en: "MORIA robot MOVEIT ISAACSIM Integration"
    },
    description: {
      en: "GR1 humanoid robot demonstrating imitation learning capabilities for human-like movements."
    }
  },
  {
    media: "h1FlipGif", // Will be imported in component
    type: 'video',
    title: {
      en: "Robot PHYSICS Inspection-ISAACSIM"
    },
    description: {
      en: "H1 attempted a backflip, but it didn't go as planned."
    }
  },
  {
    media: "h1TrainVideo",
    type: 'video',
    title: {
      en: "Motion Planning Tasks-IK Solver"
    },
    description: {
      en: "H1 robot during training phase."
    }
  },
  {
    media: "urLousdVideo",
    type: 'video',
    title: {
      en: "Robotics arm pick and place example"
    },
    description: {
      en: "Demonstrating OpenUSD integration with Isaac Sim for robotics applications and digital twin workflows."
    }
  },
  {
    media: "frankaMoveitVideo",
    type: 'video',
    title: {
      en: "Pick&Place Task DEMO"
    },
    description: {
      en: "Franka robot demonstrating MoveIt integration."
    }
  },
  {
    media: "frankaDrawerVideo",
    type: 'video',
    title: {
      en: "MOVEIT-MTC Object manipulation"
    },
    description: {
      en: "Franka robot performing drawer manipulation task."
    }
  },
  {
    media: "claw",
    type: 'video',
    title: {
      en: "High fidelity claw simulation"
    },
    description: {
      en: "Claw robot grasping task."
    }
  },
  {
    media: "leatherbackVideo",
    type: 'video',
    title: {
      en: "MOVEIT-GAZEBO Configuration Setup"
    },
    description: {
      en: "RC car simulation"
    }
  },
  {
    media: "carterOutdoorVideo",
    type: 'video',
    title: {
      en: "Robot failing/Falling Trial"
    },
    description: {
      en: "Robot outdoor simulation"
    }
  },
  {
    media: "agilityWalkVideo",
    type: 'video',
    title: {
      en: "Me with MORIA robot"
    },
    description: {
      en: "Agility humanoid robot demonstrating walking capabilities."
    }
  },
  {
    media: "gtc_lousd",
    type: 'image',
    title: {
      en: "Task planning-GRASP"
    },
    description: {
      en: "Giving a lecture at GTC 2025 on USD composition."
    }
  },
  {
    media: "gtc_sil",
    type: 'image',
    title: {
      en: "ROS software-in-the-loop simulation lab at GTC 2025"
    },
    description: {
      en: "Giving a lecture at GTC 2025 on ROS integration with Isaac Sim."
    }
  },
  {
    media: "newton",
    type: 'image',
    title: {
      en: "Presenting the next generation physics engine Newton at GTC 2025"
    },
    description: {
      en: "Presenting Newton, next generation robotics simulator at our both at NVIDIA GTC 2025."
    }
  },
  {
    media: "siggraphTalk",
    type: 'image',
    title: {
      en: "Giving a talk on reinforcement learning for humanoids at SIGGRAPH 2025"
    },
    description: {
      en: "Presenting research on humanoid robot control at SIGGRAPH 2025."
    }
  }
],

// Projects Carousel Items
projectsCarouselItems: [
  {
    media: "customQuadrupedVideo",
    type: 'video',
    title: {
      en: "Custom Quadruped(spot) Walking Policy Training"
    },
    subtitle: {
      en: "IsaacLab!"
    },
    description: {
      en: "In this project, I Trained a walking policy for a custom quadruped robot using PPO (RSL-RL, SKRL). Designed the robot asset, physics, and complex reward structures in Isaac Sim, and created both flat and procedurally generated rough terrain environments for robust learning."
    },
    buttons: [
      {
        text: { en: "Read More"},
        url: "https://github.com/yayabash/CustomQuadrupedRobotTraining"
      }
    ]
  },
  {
    media: "rlManipulationVideo",
    type: 'video',
    title: {
      en: "RL Manipulation with UR10e & Robotiq Gripper"
    },
    subtitle: {
      en: "Isaacsim"
    },
    description: {
      en: "Configured a UR10e arm and Robotiq gripper in Isaac Lab. Implemented an MDP and trained reinforcement learning policies for dynamic 'reach' tasks and complex 'lift' tasks involving approaching, grasping, lifting, and placing a cube."
    },
    buttons: [
      {
        text: { en: "Read more"},
        url: "https://github.com/yayabash/UR10e-with-Robotiq-2F-140-Gripper-Lifting-Task"
      }
    ]
  },
  {
    media: "pandaColorSortingVideo",
    type: 'video',
    title: {
      en: "Franka Panda Color Sorting Robot"
    },
    subtitle: {
      en: "ROS2/Gazebo/MoveIt2"
    },
    description: {
      en: "Developed a ROS 2-based color sorting system using a Franka Panda arm. The project combines OpenCV for color detection, MoveIt 2 for motion planning, and Gazebo for simulation to autonomously pick, place, and sort colored objects."
    },
    buttons: [
      {
        text: { en: "Read more"},
        url: "https://github.com/yayabash/Franka_Panda-Robot-"
      }
    ]
  },
  {
    media: "soArmVideo",
    type: 'video',
    title: {
      en: "SO-ARM101 MoveIt & Isaac Sim Integration"
    },
    subtitle: {
      en: "ROS2 & Isaac Sim integration / IsaacLab"
    },
    description: {
      en: "ntegrated the SO-ARM101 dual-arm robot (from TheRobotStudio & HuggingFace) with Isaac Sim and MoveIt 2. This project involved configuring the ROS 2 control bridge to enable full motion planning and simulation. moreover, trained a reinforcement learning policy for pick-and-place tasks using Isaac Lab."
    },
    buttons: [
      {
        text: { en: "Read more"},
        url: "https://github.com/yayabash/so-arm101_moveit_isaacsim_ws"
      }
    ]
  },
  {
    media: "patrollingRobotVideo",
    type: 'video',
    title: {
      en: "Patrolling Robot (ROS2 & Gazebo)"
    },
    description: {
      en: "Developed an autonomous patrol robot behavior in ROS 2. Implemented waypoint navigation and dynamic obstacle avoidance within a Gazebo simulation environment."
    },
    buttons: [
      {
        text: { en: "Read more"},
        url: "https://github.com/yayabash/Simple-Patrolling-Behavior"
      }
    ]
  },
  {
    media: "dqnRacingVideo",
    type: 'video',
    title: {
      en: "RL Car Racing with DQN & Double DQN"
    },
    description: {
      en: "a Reinforcement Learning (RL) project implementing Deep Q-Networks (DQN) and Double DQN to navigate the CarRacing-v3 environment using PyTorch and Gymnasium. The project explores training agents to drive a car on random tracks, addressing challenges like runtime errors, training instability, and environment complexity."
    },
    buttons: [
      {
        text: { en: "Read More"},
        url: "https://github.com/yayabash/rl-car-racing"
      }
    ]
  },
  {
    media: "colorSortArmImg",
    type: 'image',
    title: {
      en: "3-DOF Robotic Arm for Color-Based Box Sorting"
    },
    subtitle: {
      en: "Academic Project — Third Year"
    },
    description: {
      en: "Designed and built a 3-DOF servo-driven robotic arm for automated pick-and-place operations. Implemented a color-based object sorting detection using OpenCV, enabling the robot to distinguish and sort boxes of different colors (e.g., red and green) with high accuracy."
    },
    buttons: []
  },
  {
    media: "firstYearPlaneImg",
    type: 'image',
    title: {
      en: "My First Airplane Design"
    },
    subtitle: {
      en: "First Year University — 2019"
    },
    description: {
      en: "This was my very first engineering project: designing and building a model airplane from scratch in my first year of university. This experience sparked my passion for building airplanes and robots, and set me on the path to robotics and engineering."
    },
    buttons: []
  }
],

// Volunteer Section -------
volunteer: [
  {
    id: 0,
    title: {
      en: "Robotics Software Engineer"
    },
    organization: {
      en: "Bursa Space, Aviation & Defense Systems"
    },
    imageSrc: VolunteerCoverImg,
    mediaSrc: VolunteerModalImg,
    type: "Community",
    date: "09/2024 - 03/2025",
    description: {
      en: "Developed a fully autonomous UAV for Teknofest Fighting UAV Competition"
    },
    details: [
      {
        en: "Developed a fully autonomous UAV for Teknofest Fighting UAV Competition"
      },
      {
        en: "Implemented ROS2, PX4, PID control, computer vision, and AI-based detection"
      },
      {
        en: "Designed path planning and mission autonomy with ArduPilot"
      },
      {
        en: "Collaborated in a multidisciplinary engineering team consisting of mechanical, electrical, and software engineers"
      }
    ]
  }
],

// Certifications Section -------
certifications: [
  {
    id: 0,
    title: {
      en: "ETH AMRX Autonomous Mobile Robots Course"
    },
    issuer: {
      en: "ETH Zurich"
    },
    date: {
      en: "2024"
    },
    description: {
      en: "Comprehensive course on autonomous mobile robots covering kinematics, dynamics, control, and real-world applications."
    },
    imageSrc: EthAmrx,
    credentialUrl: "https://courses.edx.org/certificates/e19e9c4eac43439491d2b5e18f6ab13b",
    credentialId: "e19e9c4eac43439491d2b5e18f6ab13b"
  },
  {
    id: 1,
    title: {
      en: "Machine Learning Specialization"
    },
    issuer: {
      en: "DeepLearning.AI & Stanford University"
    },
    date: {
      en: "2024"
    },
    description: {
      en: "Advanced specialization in machine learning covering supervised learning, deep learning, and neural networks."
    },
    imageSrc: MlSpecialization,
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/8YE3638HIBWH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    credentialId: "8YE3638HIBWH"
  }
],

  skills: [
    {
      img: clangIcon,
      para:
        "C, C++, C#, CUDA",
    },
    {
      img: codeIcon,
      para:
        "Python, MATLAB, R",
    },
    {
      img: RPIIcon,
      para:
        "Arduino, Raspberry Pi, ESP8266",
    },
    {
      img: openCVIcon,
      para:
        "OpenCV, Tensorflow, Pytorch",
    },
    {
      img: SolidworksIcon,
      para:
        "Solidworks, AutoCAD, Blender",
    },
    {
      img: rosIcon,
      para:
        "ROS, ROS2, Gazebo",
    },
    {
      img: isaacsIcon,
      para:
        "Isaac Sim, Isaac Lab",
    },
    {
      img: linuxGitIcon,
      para: "Linux, Git",
    },
    
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: {
  en: "Let's chat about robots!"
},
  social: [

    { img: githubIcon, 
      url: "https://github.com/yayabash"
    },
    {
      img: googleScholarIcon
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/yahye-bashiir-b5922b140/",
    },

  ],

  // End Contact Section ---------------
}

export default siteData;
