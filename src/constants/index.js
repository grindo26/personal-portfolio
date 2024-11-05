import {
    nitk,
    cluboard,
    cash_flow,
    gdsc,
    iris,
    ecell,
    genesis,
    portfolio,
    publiclab,
    zulip,
    cdc,
    chargeswap,
    placeicon,
    recruitment,
    huntly,
    oracle,
    comicify_ai,
    greentrust,
    averlon,
    devfolio,
    pba,
    ethglobal,
    polkadot,
    lightspeed,
    dennisivy,
    manipal,
    icon,
    ethforall,
    Stevens,
    mum,
    vistaar,
    ctp,
} from "../assets";

import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiOutlineTwitter, AiFillHtml5, AiOutlineGitlab } from "react-icons/ai";

import {
    SiDjango,
    SiJavascript,
    SiBootstrap,
    SiReact,
    SiTailwindcss,
    SiGraphql,
    SiPython,
    SiCplusplus,
    SiC,
    SiRubyonrails,
    SiJquery,
    SiVisualstudiocode,
    SiPostman,
    SiGit,
    SiMysql,
    SiSolidity,
    SiNetlify,
    SiChartdotjs,
    SiVite,
    SiArduino,
    SiWeb3Dotjs,
    SiIpfs,
    SiDotnet,
    SiTwilio,
    SiFlutter,
    SiReplit,
    SiFlask,
    SiFigma,
    SiGooglemaps,
    SiOpenai,
    SiGooglecloud,
    SiNextdotjs,
    SiMicrosoftazure,
    SiTypescript,
    SiNodedotjs,
    SiSpring,
    SiMongodb,
    SiAndroidstudio,
    SiAndroid,
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1Hb2tgalr_V3LP6zU-PKKnY2wKr1UmQB7/view?usp=sharing";
export const repoLink = "https://github.com/grindo26/personal-portfolio/";

export const callToAction = "https://www.linkedin.com/in/pratiksangle6/";

export const navLinks = [
    {
        id: "skills",
        title: "Skills & Experience",
    },
    {
        id: "education",
        title: "Education",
    },
    // {
    //     id: "achievements",
    //     title: "Achievements",
    // },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "openSource",
        title: "Open Source",
    },
    {
        id: "extraCurricular",
        title: "Extra Curricular",
    },
    {
        id: "contactMe",
        title: "Contact Me",
    },
];

// Add your past academic experiences here
export const educationList = [
    {
        id: "education-1",
        icon: Stevens,
        title: "Stevents Institute of Technology",
        degree: "Masters of Science",
        duration: "Sep 2022 - May 2024",
        content1: "Major: Computer Science",
        // content2: "Minor: Information Technology",
    },
    {
        id: "education-2",
        icon: mum,
        title: "University of Mumbai",
        degree: "Bachelor of Engineering",
        duration: "Aug 2014 - May 2018",
        content1: "Major: Computer Engineering",
    },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
    {
        id: "a-1",
        icon: ethglobal,
        event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
        position: "Winner",
        content1: "Top 12 winners among 20k+ registrations",
        content2: "One of Polygon's Best Public Goods",
        content3: "Best Module on Biconomy SDK",
        article: "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
        project: "https://devfolio.co/projects/chargeswap-3527",
        youtube: "https://youtu.be/9rieTya8Yds?t=3908",
    },
    {
        id: "a-2",
        icon: polkadot,
        event: "Polkadot Hackathon: Europe Edition",
        position: "2nd Runner Up in the ink! Smart Contract Category",
        content1: "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
        content2: "",
        content3: "",
        github: "https://github.com/pranav2305/GreenTrust",
    },
    {
        id: "a-3",
        icon: lightspeed,
        event: "Warpspeed by Lightspeed",
        position: "1st Runner Up",
        content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
        content2: "Top 3 projects using Replit",
        content3: "1st Runner Up by Amazon Web Services (AWS)",
        article: "https://shorturl.at/fhjsT",
    },
    {
        id: "a-4",
        icon: dennisivy,
        event: "September Hackathon by Dennis Ivy",
        position: "Winner",
        content1: "Rated the best portfolio website among 450+ participants across the globe.",
        content2: "",
        content3: "",
        youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
        project: "https://parthmittal.netlify.app/",
    },
    {
        id: "a-5",
        icon: manipal,
        event: "Manipal Hackathon'22",
        position: "Consolation Prize",
        content1: "Top 10 among 500+ teams across India",
        content2: "Developed a cross-platform mobile application to address the problem of social cohesion.",
        content3: "",
        article: "https://shorturl.at/exEIQ",
    },
    {
        id: "a-6",
        icon: icon,
        event: "ICON Hyperbuild Hackathon",
        position: "Honorable Mention",
        content1: "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
        content2: "",
        content3: "",
        project: "https://devpost.com/software/green-trust-xj2w6g",
    },
    {
        id: "a-7",
        icon: ethforall,
        event: "ETHForAll 2023",
        position: "Top 3 Superfluid Projects",
        content1: "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
        content2: "",
        content3: "",
        project: "https://devfolio.co/projects/green-trust-ed14",
    },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
    {
        title: "Programming Languages",
        items: [
            {
                id: "pl-1",
                icon: DiRuby,
                name: "Ruby",
            },
            {
                id: "pl-2",
                icon: SiPython,
                name: "Python",
            },
            {
                id: "pl-3",
                icon: SiCplusplus,
                name: "C++",
            },
            {
                id: "pl-4",
                icon: FaGolang,
                name: "Go",
            },
            {
                id: "pl-5",
                icon: FaRust,
                name: "Rust",
            },
            {
                id: "pl-6",
                icon: DiJava,
                name: "Java",
            },
            {
                id: "pl-7",
                icon: SiC,
                name: "C",
            },
            {
                id: "pl-8",
                icon: AiFillHtml5,
                name: "HTML",
            },
            {
                id: "pl-9",
                icon: DiCss3,
                name: "CSS",
            },
            {
                id: "pl-10",
                icon: SiJavascript,
                name: "JavaScript",
            },
            {
                id: "pl-11",
                icon: SiTypescript,
                name: "TypeScript",
            },
        ],
    },
    {
        title: "Frameworks/Libraries",
        items: [
            {
                id: "f-1",
                icon: SiDjango,
                name: "Django",
            },
            {
                id: "f-2",
                icon: SiNodedotjs,
                name: "Node.js",
            },
            {
                id: "f-3",
                icon: SiRubyonrails,
                name: "Ruby on Rails",
            },
            {
                id: "f-4",
                icon: SiReact,
                name: "ReactJS",
            },
            {
                id: "f-5",
                icon: SiBootstrap,
                name: "Bootstrap",
            },
            {
                id: "f-6",
                icon: SiTailwindcss,
                name: "Tailwind CSS",
            },
            {
                id: "f-7",
                icon: SiSpring,
                name: "Spring",
            },
            {
                id: "f-8",
                icon: SiGraphql,
                name: "GraphQL",
            },
            {
                id: "f-9",
                icon: SiDotnet,
                name: ".NET",
            },
        ],
    },
    {
        title: "Tools",
        items: [
            {
                id: "t-1",
                icon: SiMicrosoftazure,
                name: "Azure",
            },
            {
                id: "t-2",
                icon: SiMysql,
                name: "MySQL",
            },
            {
                id: "t-3",
                icon: SiPostman,
                name: "Postman",
            },
            {
                id: "t-4",
                icon: SiVisualstudiocode,
                name: "VS Code",
            },
            {
                id: "t-5",
                icon: SiGit,
                name: "Git",
            },
            {
                id: "t-6",
                icon: AiFillGithub,
                name: "GitHub",
            },
            {
                id: "t-7",
                icon: AiOutlineGitlab,
                name: "Gitlab",
            },
            {
                id: "t-8",
                icon: SiNetlify,
                name: "Netlify",
            },
            {
                id: "t-9",
                icon: SiMongodb,
                name: "MongoDB",
            },
        ],
    },
];

// Add your current/past professional work experience here
export const experiences = [
    {
        organisation: "Changing The Present Inc",
        logo: ctp,
        link: "https://changingthepresent.org/",
        positions: [
            {
                title: "Software Engineer Intern",
                duration: "Jul 2024 - Present",
                content: [
                    {
                        text: "Achieved a 50% reduction in server load by designing a high-efficiency GraphQL API with Redis caching",
                        link: "",
                    },
                ],
            },
        ],
    },
    {
        organisation: "Vistaar Systems Pvt. Ltd., India",
        logo: vistaar,
        link: "https://www.vistaar.com/",
        positions: [
            {
                title: "Senior Software Engineer",
                duration: "Jun 2021 - Jul 2022",
                content: [
                    {
                        text: "Led and mentored a team of nine on major projects for Ford, Jim Beam, and Gallo Winery, leveraging Agile methodologies to achieve a 95% on-time delivery rate",
                        link: "",
                    },
                    {
                        text: "Engineered a Node.js and React mass update module, saving users 5 hours by streamlining data exchange",
                        link: "",
                    },
                    {
                        text: "Reduced processing time by 70% by implementing Redis caching and migrating security scripts from Node.js to PostgreSQL",
                        link: "",
                    },
                    {
                        text: "Developed a Kafka PubSub model for notifications for 20,000 concurrent users, ensuring low latency with Artillery load testing",
                        link: "",
                    },
                    {
                        text: "Spearheaded development of a Node.js and GraphQL framework, reducing development time by 60%",
                        link: "",
                    },
                ],
            },
            {
                title: "Software Engineer",
                duration: "Jun 2018 - Jun 2021",
                content: [
                    {
                        text: "Boosted performance by 90% by refactoring Node.js code with efficient data structures and optimizing AWS EC2 instances",
                        link: "",
                    },
                    {
                        text: "Integrated Elasticsearch, Logstash, Kibana on Linux, reducing reporting time from 5 hours to 10 minutes through optimized logs",
                        link: "",
                    },
                    {
                        text: "Built a React-Django web app with REST and GraphQL APIs, automating data processing and visualization for beverage distributors, saving 20 hours of manual work weekly",
                        link: "",
                    },
                    {
                        text: "Achieved 99% data integrity, saved 15 hours of manual effort per week by automating data error correction using Python",
                        link: "",
                    },
                    {
                        text: "Resolved data inconsistencies in Redis cache, enhanced logging with Amazon S3, and reduced user-reported defects by 60%",
                        link: "",
                    },
                ],
            },
        ],
    },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
    {
        id: "project-1",
        title: "NurtureNest",
        github: "https://github.com/grindo26/nurture-nest",
        link: "",
        // image: ,
        content: "Childcare management platform that streamlines nanny hiring, task management, and real-time parent communication",
        stack: [
            {
                id: "icon-1",
                icon: SiReact,
                name: "React",
            },
            {
                id: "icon-2",
                icon: SiTailwindcss,
                name: "TailwindCSS",
            },
            {
                id: "icon-3",
                icon: SiMongodb,
                name: "MongoDB",
            },
            {
                id: "icon-4",
                icon: SiNodedotjs,
                name: "Node.js",
            },
        ],
    },
    {
        id: "project-2",
        title: "FootballSummary",
        github: "",
        link: "",
        // image: greentrust,
        content: "Easy webapp to get football player summaries",
        stack: [
            {
                id: "icon-1",
                icon: SiDjango,
                name: "Django",
            },
            {
                id: "icon-2",
                icon: SiPython,
                name: "Python",
            },
            {
                id: "icon-3",
                icon: SiOpenai,
                name: "OpenAI",
            },
        ],
    },
    {
        id: "project-3",
        title: "Xpenditure",
        github: "https://github.com/grindo26/Xpenditure",
        link: "",
        // image: chargeswap,
        content: "Android App to Manage Expenses and Split Bills with Friends",
        stack: [
            {
                id: "icon-1",
                icon: SiAndroid,
                name: "Android",
            },
            {
                id: "icon-2",
                icon: SiAndroidstudio,
                name: "AndroidStudio",
            },
        ],
    },
];

// Add links to blogs here
export const blogPosts = [
    {
        id: "post-1",
        title: "Blog Post 01 - Title",
        link: "#",
        date: new Date().toLocaleDateString(), // Can be edited to any string format
        image: "https://via.placeholder.com/600/92c952",
        tags: [
            {
                id: "tag-1",
                name: "tag 01",
            },
            {
                id: "tag-2",
                name: "tag 03",
            },
            {
                id: "tag-3",
                name: "tag 03",
            },
        ],
    },
    {
        id: "post-2",
        title: "Blog Post 02 - Title",
        link: "#",
        date: new Date().toLocaleDateString(),
        image: "https://via.placeholder.com/600/d32776",
        tags: [
            {
                id: "tag-1",
                name: "tag 01",
            },
            {
                id: "tag-2",
                name: "tag 03",
            },
            {
                id: "tag-3",
                name: "tag 03",
            },
        ],
    },
    {
        id: "post-3",
        title: "Blog Post 03 - Title",
        link: "#",
        date: new Date().toLocaleDateString(),
        image: "https://via.placeholder.com/600/771796",
        tags: [
            {
                id: "tag-1",
                name: "tag 01",
            },
            {
                id: "tag-2",
                name: "tag 03",
            },
            {
                id: "tag-3",
                name: "tag 03",
            },
        ],
    },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
    {
        id: "stats-1",
        title: "Organisations",
        value: "2+",
    },
    {
        id: "stats-2",
        title: "Issues Opened",
        value: "6+",
    },
    {
        id: "stats-3",
        title: "Pull Requests",
        value: "6+",
    },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
    {
        id: 1,
        organisation: "Devfolio",
        title: "UniDAO Lead",
        duration: "December 2021 - Present",
        content: [
            {
                text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
                link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
            },
            {
                text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
                link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
            },
        ],
        logo: devfolio,
    },
    {
        id: 2,
        organisation: "Google Developer Student Club, NITK",
        title: "Co-Chair",
        duration: "December 2021 - Present",
        content: [
            {
                text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
                link: "",
            },
            {
                text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
                link: "https://incident.nitk.ac.in/",
            },
        ],
        logo: gdsc,
    },
    {
        id: 3,
        organisation: "Genesis, NITK",
        title: "Competitions Head",
        duration: "Sep 2021 - Present",
        content: [
            {
                text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
                link: "",
            },
            {
                text: "Won 7 inter-college solo dance competitions",
                link: "",
            },
        ],
        logo: genesis,
    },
    {
        id: 4,
        organisation: "IRIS, NITK",
        title: "Tutor",
        duration: "Jan 2022 - Jan 2022",
        content: [
            {
                text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
                link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
            },
        ],
        logo: iris,
    },
    {
        id: 5,
        organisation: "E-Cell, NITK",
        title: "Executive Member",
        duration: "Sep 2021 - Apr 2022",
        content: [
            {
                text: "Organised the season 3 of the E-Cell NITK Podcast",
                link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
            },
            {
                text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
                link: "",
            },
        ],
        logo: ecell,
    },
];

// Links to your social media profiles
export const socialMedia = [
    {
        id: "social-media-1",
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/pratiksangle6/",
    },
    {
        id: "social-media-2",
        icon: AiFillGithub,
        link: "https://github.com/grindo26",
    },
    {
        id: "social-media-3",
        icon: AiFillMail,
        link: "mailto:pratiksangle6@gmail.com",
    },
    // {
    //     id: "social-media-4",
    //     icon: AiOutlineTwitter,
    //     link: "https://www.twitter.com/mittalparth_",
    // },
    // {
    //     id: "social-media-5",
    //     icon: AiFillInstagram,
    //     link: "https://www.instagram.com/mittalparth_",
    // },
];

// Your professional summary
export const aboutMe = {
    name: "Pratik Sangle",
    githubUsername: "grindo26",
    tagLine: "Software Engineer (4+ yrs) | ex-SDE Intern @Vistaar",
    intro: "I'm just a software engineer, always aiming to take one step better than I did the day before.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = ["publiclab/plots2", "zulip/zulip", "paritytech/polkadot-sdk"];
