import {
    FaReact,
    FaNodeJs,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiPostgresql,
    SiMapbox,
    SiSymfony,
    SiSass,
    SiPhp,
    SiMysql,
    SiDocker,
    SiGithub
} from "react-icons/si";

const defaultStack = [
    { Icon: FaReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiTailwindcss, name: "Tailwind" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
];

const geoStack = [
    { Icon: FaReact, name: "React" },
    { Icon: SiMapbox, name: "Mapbox" },
    { Icon: SiSymfony, name: "Symfony" },
    { Icon: SiSass, name: "Sass" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiPhp, name: "PHP" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: SiDocker, name: "Docker" },
];

export const getProjects = (t: (key: string) => string) => {
    return [
        {
            title: "RescueLog",
            link: "https://rescuelog.fr/",
            thumbnail: "/projects/rescuelog.png",
            description: t("projects.rescuelog.description"),
            stack: defaultStack,
        },
        {
            title: "GéoPatrimoines",
            link: "https://geopatrimoines.com/",
            thumbnail: "/projects/geopatrimoines.png",
            description: t("projects.geopatrimoines.description"),
            stack: geoStack,
        },
        {
            title: "RescueLearn",
            link: "https://rescuelearn.fr/",
            thumbnail: "/projects/resculearn.png",
            description: t("projects.rescuelearn.description"),
            stack: defaultStack,
        },
    ];
};
