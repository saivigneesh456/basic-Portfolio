import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

import { GrCertificate,GrBook } from 'react-icons/gr';
import { IoIosSchool } from 'react-icons/io';

export const Experience = [
    {
        id: 1,
        date: "2022 - present",
        iconsSrc: <IoCodeWorking className="text-white"/>,
        title: "Intern",
        location: "Chennai,India",
        description:
          "Full stack web-developer at Virtusa Private Ltd.",
      },
      {
        id: 2,
        date: "2019 - 2023",
        iconsSrc: <IoIosSchool  className="text-white"/>,
        title: "UG-Degree",
        location: "Chennai,India",
        description:
          "Vel Tech Unversity",
      },
      {
        id: 3,
        date: "2017 - 2019",
        iconsSrc: <GrCertificate className="bg-white" />,
        title: "High School",
        location: "Vijayawada,India",
        description:
          "Sri Chaitanya junior college",
      },
      {
        id: 4,
        date: "2016 - 2017",
        iconsSrc: <GrCertificate className="bg-white" />,
        title: "Secondary High School",
        location: "Kurnool,India",
        description:
          "Montessori english medium high school",
      },
]


export const Projects = [
    {
      id: 1,
      name: "Portfolio",
      techs: "JS,CSS",
      /*imageSrc: img3,*/
      github: "https://github.com/saivigneesh456/Portfolio",
      live:"https://portofiloweb.netlify.app/"
    }
];
  

export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "https://github.com/saivigneesh456",
    },
    {
      id: 2,
      iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
      name: "YouTube",
      link: "https://www.youtube.com/results?search_query=infyskill",
    },
    {
      id: 3,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Twitter",
      link: "https://twitter.com/Infyskilledtech",
    },
    {
      id: 4,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in",
    },
    {
      id: 5,
      iconSrc: (
        <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
      ),
      name: "Whatsapp",
      link: "https://web.whatsapp.com/send?phone=+917680851886",
    },
  ];
  