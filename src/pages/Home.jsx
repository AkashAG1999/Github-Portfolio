import React from 'react';
import pic from '../assets/pic.jpg';
import { FaInstagram, FaDownload, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Home = () => {

    const localTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false });

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
                    <div className='border border-slate-700 rounded p-4'>
                        <h2 className="text-2xl font-bold border-b-2 border-gray-700 pb-1 mt-4">About Me</h2>
                        <p className="mt-2 text-sm text-gray-400">
                            I am an Msc Computer Science graduate with a passion for UI design. With a strong background in both front-end development and design, I am skilled at creating intuitive and visually appealing user interfaces. I am always eager to learn new technologies and improve my design skills.
                        </p>
                        <ul className="list-disc ml-5 mt-4 text-gray-400 text-sm">
                            <li>🎓 Msc Computer Science Graduate</li>
                            <li>🎨 UI Designer with experience in creating user-friendly interfaces</li>
                            <li>📬 Email: <a href="mailto:akashdeny@outlook.com" className="text-blue-400">akashdeny@outlook.com</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">Education</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            <div className="border border-slate-700 p-4 rounded">
                                <h3 className="text-lg font-bold">Msc Computer Science</h3>
                                <div className="text-gray-500">2022 - 2020</div>
                                <span className="mt-2 inline-block bg-gray-600 text-sm rounded-full px-2 py-0.5">CGPA 8.41</span>
                            </div>
                            <div className="border border-slate-700 p-4 rounded">
                                <h3 className="text-lg font-bold">Bsc Computer Science</h3>
                                <div className="text-gray-500">2020 - 2017</div>
                                <span className="mt-2 inline-block bg-gray-600 text-sm rounded-full px-2 py-0.5">CGPA 7.15</span>
                            </div>
                            <div className="border border-slate-700 p-4 rounded">
                                <h3 className="text-lg font-bold">Higher Secondary</h3>
                                <div className="text-gray-500">2017 - 2016</div>
                                <span className="mt-2 inline-block bg-gray-600 text-sm rounded-full px-2 py-0.5">Percentage 66.08%</span>
                            </div>
                            <div className="border border-slate-700 p-4 rounded">
                                <h3 className="text-lg font-bold">SSLC</h3>
                                <div className="text-gray-500">2015 - 2014</div>
                                <span className="mt-2 inline-block bg-gray-600 text-sm rounded-full px-2 py-0.5">Percentage 83.8%</span>
                            </div>
                        </div>
                        <a href="/qualifications" className="text-blue-400 mt-4 block">View More</a>
                    </div>
                </div>
            </div>
            <div className="rounded-lg p-4 mt-8 flex-grow">
                <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                <div className="space-y-4">
                    <div className="border border-slate-700 p-4 rounded">
                        <h3 className="text-lg font-bold">ICICI Bank, Thuckalay</h3>
                        <div className="text-gray-500">Aug 2023 - Oct 2023</div>
                        <p className="mt-2 text-sm text-gray-400">
                            Relationship Manager - Responsible for managing client relationships, ensuring customer satisfaction, and providing financial advice to clients.
                            <ul className="list-disc ml-5 mt-2">
                                <li>Managed a portfolio of high-net-worth clients, providing personalized financial solutions.</li>
                                <li>Collaborated with cross-functional teams to enhance client experience.</li>
                                <li>Achieved a 15% increase in client satisfaction ratings through proactive relationship management.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="border border-slate-700 p-4 rounded">
                        <h3 className="text-lg font-bold">Capztone Innovative Solution</h3>
                        <div className="text-gray-500">Oct 2023 - July 2024</div>
                        <p className="mt-2 text-sm text-gray-400">
                            Web Developer and UI Designer - Developed and designed user-friendly web interfaces, collaborated with cross-functional teams, and implemented innovative solutions to enhance user experience.
                            <ul className="list-disc ml-5 mt-2">
                                <li>Designed and developed responsive web applications using React and Node.js.</li>
                                <li>Improved website performance by 20% through code optimization and efficient resource management.</li>
                                <li>Worked closely with UX designers to ensure seamless user experiences.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <footer className="text-xs text-gray-400 text-center py-4 mt-8">
                <p>© 2024 Akash A G, Inc.</p>
            </footer>
        </div>
    );
};

export default Home;
