import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import attendance from '../assets/images/attendance.jpg';


export default {
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
      link: "https://www.facebook.com",
      text: "My Facebook",
      icon: <FacebookIcon />,
    },
    Instagram: {
      link: "https://www.facebook.com",
      text: "My Instagram",
      icon: <InstagramIcon />,
    },
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
    Twitter: {
      link: "https://www.facebook.com",
      text: "My Twitter",
      icon: <TwitterIcon />,
    },
  },

  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque. Ac tortor vitae purus faucibus ornare suspendisse sed. Volutpat commodo sed egestas egestas fringilla. Nulla facilisi etiam dignissim diam quis. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nisl vel pretium lectus quam id leo. Lacinia quis vel eros donec. Urna porttitor rhoncus dolor purus non enim praesent. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Ullamcorper sit amet risus nullam eget felis. Iaculis eu non diam phasellus vestibulum lorem sed. Eget magna fermentum iaculis eu non diam. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus.\n\n\nRisus nec feugiat in fermentum posuere. Platea dictumst quisque sagittis purus sit amet. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Mattis rhoncus urna neque viverra justo nec ultrices dui. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Vestibulum rhoncus est pellentesque elit. Dolor sed viverra ipsum nunc aliquet bibendum enim. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Ut lectus arcu bibendum at. Orci a scelerisque purus semper eget duis at tellus. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Lorem ipsum dolor sit amet consectetur adipiscing. Lectus magna fringilla urna porttitor rhoncus dolor. Elit ut aliquam purus sit. Ac ut consequat semper viverra nam libero justo laoreet. Pulvinar mattis nunc sed blandit libero volutpat.",

  education_history: [
    { title: "School1", 
    date: "2018-present", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"  
    },
    { title: "School2", 
     date: "2008-2010", 
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo" 
    },
    { title: "School3",
     date: "2006-2008", 
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"  
    },
  ],
  accomplishments: [
    { title: "School1", 
    date: "2018-present", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo" 
    },
    { title: "School2", 
     date: "2008-2010", 
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" 
    },
    { title: "School3",
     date: "2006-2008", 
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tLorem ipsum dolor sit amet"
    },
  ],
  skills: [
    {
      title:'front',
      description:['React-Js','javascript','Material-ui'],
    },
    {
      title:'front2',
      description:['React-Js','javascript','Material-ui'],
    },    
    {
      title:'front3',
      description:['React-Js','javascript','Material-ui'],
    },
    {
      title:'front4',
      description:['React-Js','javascript','Material-ui'],
    },
  ],

  projects:[
    {
      image:attendance,
      title:"Project 1",
      description:"This is my Project description",
      links:[
      {link: 'https://www.google.com'}]
    },

     { image:attendance,
      title:"Project 2",
      description:"This is my Project description",
      links:[
      {link: 'https://www.google.com'}]
      },

      {image:attendance,
      title:"Project 3",
      description:"This is my Project description",
      links:[
      {link: 'https://www.google.com'}
      ]
      },
      
      ],
  

};
