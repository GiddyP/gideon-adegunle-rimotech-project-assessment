interface Skills {
    techSkills: string[];
    softSkills: string[];
}

const Gideon = () => {

    const name: string = 'Gideon Gbenga Adegunle';
    const email: string = 'giddygbenga4@gmail.com';
    const linkedIn: string = 'www.linkedin.com/in/gideon-adegunle';
    const repository: string = 'https://github.com/GiddyP?tab=repositories';
    const phoneNumber: number = +2347067174101;

    const workExperience = (): { [key: string]: string; }[] => [
        { '2021-tillDate': 'Frontend Software Engineer at BIZ 301 under Pushgust Technologies – Lagos, NG' },
        { '2021-2022': 'Records Officer, (Youth-Service) – University of Lagos - Lagos, NG.' },
    ];

    const education = (): { [key: string]: string; }[] => [
        { '2015-2020': "B.Sc. Ed Bachelor’s degree, Arts and Social Science (Political Science) University of Ibadan – Ibadan, NG." },
    ];

    const certifications = [
        { '2023': "Front-End Developer Capstone (Meta) - Cousera." },
        { '2023': "Advanced React (Meta) - Cousera." },
        { '2023': "Principles of UX/UI Design (Meta) - Cousera." },
        { '2022': "Certificate of National Service: National Youth Service Corp (NYSC)." },
        { '2022': "HTML, CSS, and JavaScript for Web Developers (Johns Hopkins University)." },
        { '2022': "Version Control (Meta) - Cousera." },
        { '2022': "Programming with JavaScript (Meta) - Cousera." },
        { '2022': "Introduction to Front-End Development (Meta) - Cousera." },
        { '2022': "The Web Developer Boot camp - Udemy." },
        { '2021': "Forex Algorithmic Trading Course: Code a Forex Robot - Udemy." },
        { '2021': "Learning How to Learn: Powerful mental tools to help you master tough subjects Deep Teaching Solutions - Cousera." },
        { '2020': "Communication in the 21st Century Workplace (University of California, Irvine) - Cousera." },
    ];

    const skills: Skills = {
        techSkills: [
            'HTML/CSS/JS', 'Canva', 'Motion design', 'JavaScript', 'TypeScript', 'NestJS',
            'Postgres/MongoDB/ORM', 'Bootstrap/Tailwind', 'Webpack/Vite', 'npm/yarn', 'Firebase',
            'NestJS/React', 'MUI/ChakraUI', 'ChatGPT-AI', 'MQL5', 'Sanity.io', 'Strapi-Dashboard',
            'Code debugging',
        ],
        softSkills: [
            'Collaboration skills', 'Effective communication', 'Proficient speaker',
            'Call handling proficiency', 'Strong multitasking', 'Conflict resolution skills',
        ],
    };



    return (
        <div>
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>LinkedIn: {linkedIn}</p>
            <p>Repository: {repository}</p>
            <p>Phone Number: {phoneNumber}</p>

            <h2>Work Experience:</h2>
            <ul>
                {workExperience().map((experience, index) => (
                    <li key={index}>{Object.values(experience)[0]}</li>
                ))}
            </ul>

            <h2>Education:</h2>
            <ul>
                {education().map((edu, index) => (
                    <li key={index}>{Object.values(edu)[0]}</li>
                ))}
            </ul>

            <h2>Certifications:</h2>
            <ul>
                {certifications.map((certification, index) => {
                    const year = Object.keys(certification)[0];
                    const title = Object.values(certification)[0];
                    return (
                        <li key={index}>
                            <strong>{year}: </strong>{title}
                        </li>
                    );
                })}
            </ul>

            <h2>Tech Skills:</h2>
            <ul>
                {skills.techSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>

            <h2>Soft Skills:</h2>
            <ul>
                {skills.softSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Gideon;