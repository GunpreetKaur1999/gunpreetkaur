import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import attendance from '../assets/images/attendance.jpg';
import dictionary from '../assets/images/dictionary.png';
import Portfolio from '../assets/images/Portfolio.png';


var resumeData={
  name: "GUNPREET KAUR",
  title: "To be Engineer...",
  address: "A-303 Commanders Glory Apartments, Singapura, Bangalore-560097",

  birthday: "23rd September 1999",
  email: "1999gunpreet@gmail.com",
  phone: "7022302811",
  college: "Sir MVIT Bangalore",

  formalsocials: {
    LinkedIn: {
      link: "https://www.facebook.com",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://www.facebook.com",
      text: "My GitHub",
      icon: <GitHubIcon />,
    },
  },

  socials: {
    Facebook: {
      link: "https://www.facebook.com/gunpreet.kaur.522",
      text: "My Facebook",
      icon: <FacebookIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com/gunpreet.kaur_/",
      text: "My Instagram",
      icon: <InstagramIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/gunpreet-kaur-847b781b4/",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/GunpreetKaur1999",
      text: "My GitHub",
      icon: <GitHubIcon />,
    },
    Twitter: {
      link: "https://twitter.com/imgunpreetkaur",
      text: "My Twitter",
      icon: <TwitterIcon />,
    },
  },

  about:"I'm a Computer Science Engineering Student who loves to solve problems. I seek opportunities to work in an environment that challenges me everday so that I consistently put in extra efforts to make a better version of myself.I'm a good public speaker and a good communicator as well,I'm a National Level Declamation Winner as well.I love giving Presentations.To the best of my knowledge I'm quite determined,optimistic,reliable,pragmatic and a punctual person.",
  education_history: [
    { title: "Sir M Visvesvaraya Institute of Technology", 
    date: "2018-present", 
    description: "A computer-science engineering student."
    },
    { title: "Student  Attendee at IGNITE+",
    date: "2021-present", 
    description: "IGNITE+ is a training program for Woman Engineers organised by Target, I was a part of it."
   },
    { title: "Airforce School Hebbal,Bangalore", 
     date: "2015-2017", 
     description: "I completed my 12th from Airforce School Hebbal.\nMy subjects were Physics,Chemistry,Maths and Biology(PCMB).Aggregate Percentage-90% ",
    },
    { title: "Airforce School Jalahalli,Bangalore",
     date: "2014-2015", 
     description: "I completed my 10th from Airforce School Jalahalli. CGPA-10cgpa",  
    },
    { title: "Sant Nischal Singh Public School, Yamuna-Nagar",
    date: "Till 2014", 
    description: "Schooling till class 9 was in SNSPS.These years helped me a lot to work on extra-curricular activities.",  
   },
  ],
  accomplishments: [

    { title: "NATIONAL LEVEL DECLAMATION CONTEST, WINNER",
    date: "2016", 
    description: "A declamation contest was held by AFWWA at National Level in Delhi, Subroto Park, I bagged 1st prize in that declamation contest."
   },
   { title: "STATE LEVEL DECLAMATION CONTEST, WINNER, TWICE",
   date: "2016 and 2017", 
   description: "A declamation contest was held by AFWWA at State Level in Bangalore, I bagged 1st position in that declamation contest."
  },
    { title: "VTU FEST ELOCUTION COMPETITION 2nd RUNNER UP", 
    date: "2nd Year of Engineering", 
    description: "Elocution competiton was held in Dharwad organised by the VTU, I bagged 3rd positon amongst the students of all VTU colleges who participated in Elocution Competition",
    },
    { title: "WOMEN's DAY, PUBLIC-SPEAKING, WINNER", 
     date: "2nd Year of Engineering", 
     description: "A speech competiton was held in SMVIT on Women's day.",
    },


  ],
  skills: [
    {
      title:'Languages',
      description:['C','C++','Java','Python'],
    },
    {
      title:'Undergraduate',
      description:[
        'DS and Algo',
        'DBMS',
        'Software Engg',
        'OOPS Concepts',
        'Operating Systems'
        ],
    }, 
    {
      title:'Web Development',
      description:['HTML','CSS','Bootstrap','React','Material-UI','DJango'],
    },
   

    {
      title:'Interpersonal Skills',
      description:['Public-Speaking','Determination','Punctuality','Optimistic','Pragmatic'],
    },
  ],

  interests: [
    {
      title:'Interested In',
      description:['Problem Solving'],
    },
    {
      title:'Worked On',
      description:['Front-End','Back-End'],
    },    
    {
      title:'Read about',
      description:['SQL','Version Control'],
    },
    {
      title:'Would Love to explore',
      description:['Big Data'],
    },
  ],

  projects:[
    {
      image:attendance,
      title:"ATTENDANCE WEB APP",
      description:"We created an attendance app for Covid-19 after seeing the problems in our Mother's School.This app lets you track, and report attendance online with ease. It is completely web based so you can access the info anywhere if you are connected to the internet.Tech-Stack Used: Django,HTML,CSS,Bootstrap.",
      links:[
      {link: 'https://www.google.com'}]
    },

     { image:dictionary,
      title:"READING AIDER",
      description:"You can quickly look up the definitions of words while reading articles or paragraphs in our Web app.The Hindu editorials do consume a lot of time, So, this aider gives meanings of word on a single click and displays them on screen. Tech-Stack used HTML,CSS,JavaScript,JQuery and Meriam-Webstar API",
      links:[
      {link: 'https://www.google.com'}]
      },

      {image:Portfolio,
      title:"PORTFOLIO (REACT)",
      description:"This is a Portfolio Project.  Tech-Stack used: React,CSS,Material-ui,Bootstrap.",
      links:[
      {link: 'https://www.google.com'}
      ]
      },
      
      ],
  

};

export default resumeData;
