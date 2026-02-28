'use client';

import React from 'react';
import StaffIcon from './Icons/Staff';

const staffData = [
    {
        id: 1,
        name: 'Farlan Hermosa',
        image: '/staff/Farlan.svg',
        description:
            'Joined the Language Services Solutions team in 2016 as a translator and has since advanced to providing expertise for media projects. Farlan holds a Bachelor of Arts in Visual Art and Multimedia Production. He enjoys using his skills to ensure content is adapted to the preferences and needs of the client and their target audience. In his free time, Farlan enjoys photography.',
    },
    {
        id: 2,
        name: 'Oscar Franco',
        image: '/staff/Lucas.svg',
        description:
            'Joined the Language Services solutions team in 2020 and focuses on technical translations, writing and editing. Oscar is a software engineer with experience in project management, digital animation, and technical writing. He worked on a series of interactive media projects that highlighted the diverse cultures in the many regions of Colombia, South America including the widely recognized Mi Finquita Cafetera. He likes to work on projects that combine technical expertise and an understanding of the target audience. Oscar loves game development and animation.',
    },
    {
        id: 3,
        name: 'Chairin Hermosa',
        image: '/staff/Chairin.svg',
        description:
            'Joined the Language Service Solutions team in 2017 as a translator and has expanded her scope of work to include transcriptions, editing and interpretation in Spanish and English. Chairin holds a Bachelor of Arts in Education, majoring in Languages and Childhood Education. She values human interaction and fellowship—two elements that have been essential in her work as a teacher and as an interpreter in diverse contexts and settings, primarily around community engagement. Chairin enjoys music, dancing, and playing the guitar.',
    },
    {
        id: 4,
        name: 'Laura Bautista',
        image: '/staff/Laura.svg',
        description:
            'Joined the Language Services Solutions team in 2020 and uses her skills and experience to support project management and technical writing. Laura holds a Bachelor of Arts in International Business Administration and enjoys working on projects that serve and empower communities and focus on language justice and access. She loves to spend time with her family and travel in her free time.',
    },
    {
        id: 5,
        name: 'Murtado Bustillos',
        image: '/staff/Murtado.svg',
        description:
            'Founded Language Service Solutions based on the expertise he built around translation and interpretation work over the past 20 years. His experience spans a variety of areas and contexts, including providing language services for the local community, non-profit and health care organizations, universities and research projects, and other community-centered projects. He is passionate about working with organizations to provide language access and create a spirit of inclusion and belonging in communities.',
        additionalDescription:
            "Murtado is conscientious about the diversity of the communities where he works, acknowledging that no single approach works for everyone. He continues to educate himself on emerging technologies, community and client needs, as well as best practices, to provide the most comprehensive solutions that work for each of his clients' individual needs. In his free time, he enjoys playing volleyball and traveling.",
    },
    {
        id: 6,
        name: 'Latimah B. Arrechea',
        image: '/staff/Latimah.svg',
        description:
            'Joined the Language Service Solutions team in 2010. She provides support in document translation and transcriptions, both in English and Spanish. Latimah holds a Bachelor of Science in Chemistry. She is fluent in Spanish, English, Indonesian and Portuguese. Her travels across the globe contributed to her passion for languages and research, and provided a solid foundation for her work in the language services field. In her free time, Latimah enjoys reading, traveling, and spending time with her family.',
    },
];

const StaffTeam = () => {
    return (
        <div className="grid sm:grid-cols-3 grid-col-1 gap-x-7 gap-y-20">
            {staffData.map((staff) => (
                <div key={staff.id}>
                    <StaffIcon path={staff.image} staffName={staff.name} />
                    <h3 className="text-center letter-spacing--small uppercase text-xl mt-6 mb-4">
                        {staff.name}
                    </h3>
                    <p className="text-center font-thin">{staff.description}</p>
                    {staff.additionalDescription && (
                        <p className="text-center font-thin mt-4">
                            {staff.additionalDescription}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default StaffTeam;
