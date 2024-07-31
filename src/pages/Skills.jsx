import React from 'react';
import pic from '../assets/pic.jpg';
import { FaInstagram, FaDownload, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Skills = () => {

    const localTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false });

    const skills = [
        { name: 'HTML', percentage: '95%' },
        { name: 'CSS', percentage: '85%' },
        { name: 'Tailwind CSS', percentage: '90%' },
        { name: 'Adobe', percentage: '70%' },
        { name: 'Figma', percentage: '90%' },
        { name: 'React JS', percentage: '95%' },
        { name: 'MERN Stack', percentage: '50%' },
        { name: 'Android Studio', percentage: '80%' },
    ];

    return (
        <div className="p-8 bg-gray-900 text-white min-h-screen flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="col-span-1 flex flex-col items-center">
                    <div className="flex justify-center mb-4">
                        <img
                            src={pic}
                            alt="Profile"
                            className="w-40 h-40 rounded-full"
                        />
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Akash A G</h1>
                        <h2 className="text-2xl text-gray-400">akash_deny</h2>
                        <a href="/Akash_resume.pdf" download className="mt-2 bg-gray-800 text-white rounded px-4 py-2 hover:bg-gray-700 flex items-center justify-center">
                            Resume <FaDownload className="ml-2" />
                        </a>
                        <div className="mt-2 text-gray-400 text-left">
                            <div><FaMapMarkerAlt className="inline-block mr-1" /> Tamil Nadu, Kanyakumari</div>
                            <div><FaClock className="inline-block mr-1" /> {localTime} (UTC +05:30)</div>
                            <div><FaInstagram className="inline-block mr-1" /> akash_deny</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col space-y-8 max-w-4xl w-full">
                    <div>
                        <h2 className="text-2xl font-bold">Skills</h2>
                        <p className="mt-2 text-sm text-gray-400">
                            As a versatile and skilled professional, I have expertise in various areas of web development and design. My proficiency spans across front-end technologies, design tools, and development frameworks, enabling me to create intuitive and visually appealing user interfaces.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {skills.map(skill => (
                                <div key={skill.name} className="border border-slate-700 p-4 rounded">
                                    <h3 className="text-lg font-bold">{skill.name}</h3>
                                    <div className="relative pt-1">
                                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-800">
                                            <div style={{ width: skill.percentage }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                        </div>
                                        <span className="text-sm text-gray-400">{skill.percentage}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="text-xs text-gray-400 text-center py-4 mt-8">
                <p>© 2024 Akash A G, Inc.</p>
            </footer>
        </div>
    );
};

export default Skills;
