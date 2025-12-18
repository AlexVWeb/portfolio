export type Language = 'fr' | 'en';

export const translations = {
    en: {
        hero: {
            greeting: "Hello, I'm Alexandre 👋",
            role: "React / FullStack Developer",
            description: "I build modern, high-performance web applications.",
        },
        nav: {
            projects: "Projects",
            contact: "Contact",
        },
        projects: {
            title: "Projects",
            visit: "Visit Project",
            tech_stack: "Tech Stack",
            rescuelog: { description: "Mission tracking web application for rescue associations" },
            geopatrimoines: { description: "Web application for mapping and referencing small rural heritage" },
            rescuelearn: { description: "E-learning web application for first responders" },
            hero_title: "My Projects",
            hero_subtitle: "Discover my recent projects and experiments.",
            click_details: "Click to view details",
            view_details: "View details",
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Have a project in mind or just want to say hi? Send me a message below.",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send message",
            sending: "Sending...",
            success: "Message sent successfully! I'll get back to you soon.",
            error: "An error occurred while sending the message. Please try again later.",
        },
    },
    fr: {
        hero: {
            greeting: "Bonjour, je suis Alexandre 👋",
            role: "Développeur React / FullStack",
            description: "Je conçois des applications web modernes et performantes.",
        },
        nav: {
            projects: "Projets",
            contact: "Contact",
        },
        projects: {
            title: "Projets",
            visit: "Visiter le projet",
            tech_stack: "Technologies",
            rescuelog: { description: "Application web de suivi de missions pour les associations de secours" },
            geopatrimoines: { description: "Application web de cartographie et référencement des petits patrimoines ruraux" },
            rescuelearn: { description: "Application web d'e-learning pour les secouristes" },
            hero_title: "Mes Projets",
            hero_subtitle: "Découvrez mes projets récents et expérimentations.",
            click_details: "Cliquez pour voir les détails",
            view_details: "Voir les détails",
        },
        contact: {
            title: "Me Contacter",
            subtitle: "Vous avez un projet en tête ou vous voulez simplement dire bonjour ? Envoyez-moi un message ci-dessous.",
            name: "Nom",
            email: "Email",
            message: "Message",
            send: "Envoyer le message",
            sending: "Envoi en cours...",
            success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
            error: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
        },
    },
};
