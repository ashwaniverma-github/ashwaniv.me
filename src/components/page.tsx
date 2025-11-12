import React, { useState, useEffect } from 'react';
import { Code, Copy, ExternalLink } from 'lucide-react';

const user = {
  name: 'Ashwani Verma',
  bio: ' Building products to create small impacts in life . Available for monthly retainer and freelance projects.',
  email: 'av1710334@gmail.com',
  projects: [
    {
      id: '1',
      name: 'Indiegrowth',
      description: 'Write tweets that grow your brand.',
      link: 'https://indiegrowth.app',
    },
    {
      id: '2',
      name: 'jukeboxduo',
      description: 'Play music with your friends in perfect sync.',
      link: 'https://jukeboxduo.com',
    },
    {
      id: '3',
      name: 'Devpage',
      description: 'Build your portfolio in minutes.',
      link: 'https://devpage.in',
    },
  ],
};

const socials = [
  {
    twitter: 'x.com/ashwanivermax',
    github: 'https://github.com/ashwaniverma-github',
    linkedin: 'https://www.linkedin.com/in/ashwani-verma-ba2659326',
    instagram: 'https://www.instagram.com/ashwani.vermax',
    contra: 'https://contra.com/ashwaniverma/work?r=ashwaniverma',
  },
];
// ======================================================

export const CentreUpslider = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 font-sans">
      <Hero />
      <ProjectsList />
      <Footer />
    </div>
  );
};

function Hero() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="font-semibold mb-6 text-2xl sm:text-3xl">{user.name}</h1>
      
      <p className="text-base sm:text-lg mb-6">{user.bio}</p>
      <div className="bg-gray-300 w-full h-px mb-4"></div>
      <div className="flex items-center space-x-2 mb-4">
        <h2 className="font-serif text-xl sm:text-2xl mt-2">My Creations</h2>
        <Code size={24}  className='mt-3' />
      </div>
    </div>
  );
}

function ProjectsList() {
  return (
    <div className="space-y-8 mt-4">
      {user.projects.map((project) => (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          key={project.id}
          className="block"
        >
          <div className="project-card relative border-b border-gray-200 pb-6 hover:shadow-md rounded-lg p-4 transition-all duration-300">
            <div className="flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-semibold">{project.name}</h3>
              <ExternalLink size={20} className="text-gray-500" />
            </div>
            <p className="text-base sm:text-lg mt-4">
              {project.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setEmail(user.email);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const ensureUrlProtocol = (url: string): string | undefined => {
    if (url.trim() === '') return undefined;
    return url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
  };

  return (
    <div className="py-8 mt-4 text-gray-700">
      <div className="w-full bg-gray-300 h-px mb-6"></div>
      <div className="flex flex-col items-start">
        <h2 className="text-xl sm:text-2xl mb-4">Get in touch</h2>

        <div className="flex items-center border border-gray-300 rounded-lg p-3 w-full mb-6 mt-2">
          <p className=" grow font-semibold truncate mr-2">{email}</p>
          <button
            onClick={copyToClipboard}
            className="text-blue-600 cursor-pointer hover:text-blue-800 flex items-center space-x-1"
          >
            {copied ? 'Copied!' : 'Copy'}
            <Copy size={18} />
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mt-2">
          {socials && socials.length > 0 && socials[0] && (
            Object.entries(socials[0])
            //@ts-ignore
              .filter(([key, value]) => key !== 'id' && key !== 'userId' && value.trim() !== '')
              .map(([key, value]) => {
                const link = ensureUrlProtocol(value as string);
                const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1); 
                return link ? (
                  <a
                    key={key}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg  text-gray-700 hover:text-gray-900 social-link"
                  >
                    {capitalizedKey}
                  </a>
                ) : null;
              })
          )}
        </div>
      </div>
    </div>
  );
}

export default CentreUpslider;