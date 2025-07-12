'use client';
import Image from "next/image";
import "@fontsource/inter";
import CustomCursor from "./customCursor";
import './cursor.css';
import { useEffect } from 'react';
import { SocialIcon } from 'react-social-icons'

// import TextGlow from './textglow';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="background-container"> <CustomCursor /> </div>
      <div className="container"> <header className="header">
        <h1 className="name">Vansh Pandey</h1>
        <p className="tagline">Computer Science UnderGrad 👨‍🎓.</p>
        <br></br>
        <p className="Content">I build games, websites and softwares,</p>
        <p className="Content">Learning AI/ML, Deep Learning.</p>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <a className="nav-link group flex items-center py-3" href="#about">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 text-lg">About</span>
                </a>
              </li>
              <li>
                <a className="nav-link group flex items-center py-3" href="#experience">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 text-lg">Experience</span>
                </a>
              </li>
              <li>
                <a className="nav-link group flex items-center py-3" href="#projects">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 text-lg">Projects</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="social-icons">
        <SocialIcon url="https://www.linkedin.com/in/vansh-pandey-502451319/" style={{ height: 35, width: 35, marginRight: 10 }} />
        <SocialIcon url="https://www.instagram.com/enigmavp007" style={{ height: 35, width: 35, marginRight: 10 }} />
        <SocialIcon url="https://github.com/vp007-dev" style={{ height: 35, width: 35, marginRight: 10 }} />
      </div>
      </header>
      
      </div>
      <div className="content">
        <div id="about" className="section about">
          <section>
            
            Hi, I’m Vansh Pandey—a curious and driven Computer Science student specializing in Artificial Intelligence and Machine Learning at Sharda University. I’m passionate about solving complex problems and creating experiences that bridge the gap between technology and imagination.

            My journey began with an insatiable curiosity for the stars and a knack for building things. Over the years, this evolved into a diverse portfolio, from developing games with SDL2, PhaserJS, and Unity to building responsive web applications with ReactJS and Next.js. I’m equally fascinated by space exploration and the mysteries of the cosmos, which often inspire my projects, like my astronomy-focused app, Symphony of Stars.

            I thrive in collaborative environments and have actively contributed to open-source communities, including projects like Simple Icons and VS Code. Whether it’s designing a thrilling game where every choice has a twist ending or creating dynamic web experiences, I bring creativity, technical expertise, and a problem-solving mindset to the table.
            
          </section>
        </div>
        <div className="divider-text">Experience</div>
        <br></br>
        <div className="divider-line"></div>
        <div id="experience" className="section experience">
          <section className="exp">
            <h3 className="font-medium leading-snug text-slate-200">Game Development Projects</h3>
            <p className="mt-2 text-sm leading-normal">Aestroids (Itch.io): Developed a space-themed game with PhaserJS, showcasing gameplay mechanics, animations, and space aesthetics.</p>
            <p className="mt-2 text-sm leading-normal">SDL2 Platformer Game: Created a 2D platformer featuring custom character animations, ground tiles, and combat mechanics.</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              <li className="mr-1.5 mt-2">C#,</li>
              <li className="mr-1.5 mt-2">JavaScript,</li>
              <li className="mr-1.5 mt-2">C++</li>
            </ul>
          </section> 
          <section className="exp">
            <h3 className="font-medium leading-snug text-slate-200">Open Source Contributions</h3>
            <p className="mt-2 text-sm leading-normal">ASimple Icons: Contributed icons and fixed issues related to logo designs.</p>
            <p className="mt-2 text-sm leading-normal">VS Code: contributing to the VS Code open-source project.</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              <li className="mr-1.5 mt-2">Typescript,</li>
              <li className="mr-1.5 mt-2">JavaScript,</li>
              <li className="mr-1.5 mt-2">C++</li>
            </ul>
          </section> 
          <section className="exp">
            <h3 className="font-medium leading-snug text-slate-200">Space & Astronomy Projects</h3>
            <p className="mt-2 text-sm leading-normal">Symphony of Stars: Developed an interactive documentary experience featuring JWST images, integrating soundscapes and dynamic content.</p>
            <p className="mt-2 text-sm leading-normal">NASA Space Apps Challenge: Participated in the global hackathon and received certification.</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              <li className="mr-1.5 mt-2">Reactjs,</li>
              <li className="mr-1.5 mt-2">JavaScript,</li>
              <li className="mr-1.5 mt-2">C++, AstroImagej, SAOIMage</li>
            </ul>
          </section> 
          
        </div>
        <div className="divider-text">Projects</div>
        <br></br>

        <div className="divider-line"></div>
        <div id="projects" className="section projects">
        <section className="exp">
            <h3 className="font-medium leading-snug text-slate-200"><a  href="https://github.com/vp007-dev/Space-Ball">Space-Ball</a></h3>
            <p className="mt-2 text-sm leading-normal">A simple fun web-based game!</p>
            <p className="mt-2 text-sm leading-normal">Spaceball is an action-packed game where you control a main character ball, defending yourself by shooting down incoming enemy balls. Test your reflexes and aim as waves of enemies challenge your skills in a fast-paced space arena!</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            </ul>
          </section> 
          <section className="exp">
            <h3 className="font-medium leading-snug text-slate-200"><a href="https://github.com/vp007-dev/Aestroids">Aestroids</a></h3>
            <p className="mt-2 text-sm leading-normal">A simple fun web-based game!</p>
            <p className="mt-2 text-sm leading-normal">Dive into a retro-futuristic space adventure with Aestroids! This action-packed, space-themed game challenges your reflexes and strategy as you navigate through a galaxy teeming with danger. Pilot your spacecraft, dodge incoming asteroids, and blast enemies</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            </ul>
          </section> 
          <section className="exp">
            <h3 className="font-medium leading-snug text-slate-200"><a href="https://github.com/vp007-dev/VpPortfolio">Vportfolio</a></h3>
            <p className="mt-2 text-sm leading-normal">This portfolio!</p>
            <p className="mt-2 text-sm leading-normal">A portfolio Website made from nextjs inspired from birttanychuang portfolio</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            </ul> 
          </section> 
          <section className="exp">
            <h3 className="font-medium leading-snug text-slate-200"><a href="https://github.com/vp007-dev/symphonyofstars">Symphony Of Stars</a></h3>
            <p className="mt-2 text-sm leading-normal">A Project made during Nasa space apps hackathon with help of my team members ♥</p>
            <p className="mt-2 text-sm leading-normal">Symphony of Stars is an immersive and interactive experience that bridges the beauty of astronomy with the power of storytelling. This project showcases breathtaking imagery from the James Webb Space Telescope (JWST), featuring iconic nebulae like the Carina Nebula, Tarantula Nebula, and the Pillars of Creation, paired with custom soundscapes that evoke wonder and serenity.</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            </ul>
          </section> 
          <section className="exp">
            <h3 className="font-medium leading-snug text-slate-200"><a href="https://github.com/vp007-dev/BattleDoll">Battle Doll (Incomplete)</a></h3>
            <p className="mt-2 text-sm leading-normal">A unity 2-D platformer game</p>
            <p className="mt-2 text-sm leading-normal">Platformer simple game with 1 level and basic movement and fight , health system and score system and AI enemy</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            </ul>
          </section><section className="exp">
            <h3 className="font-medium leading-snug text-slate-200"><a href="https://github.com/vp007-dev/VpOS">VpOs</a></h3>
            <p className="mt-2 text-sm leading-normal">My OS with MikeOS kernel</p>
            <p className="mt-2 text-sm leading-normal">An OS with lot of terminal games and tools written in assempbly x86</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            </ul>
          </section>
          <section className="exp">
            <h3 className="font-medium leading-snug text-slate-200"><a href="https://github.com/vp007-dev/Monkey-Detection-Arduino-System-Embedded-Machine-Vision">ESP32-CAM AI Monkey Detection Embedded Vision System</a></h3>
            <p className="mt-2 text-sm leading-normal">Real-time motion and monkey-size detection using ESP32-CAM for wildlife alert systems.</p>
            <p className="mt-2 text-sm leading-normal">It is designed for forest edge farms, rooftop solar farms, or wildlife monitoring where monkeys cause damage and need to be detected without complex AI servers.</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            </ul>
          </section>
          <section className="exp">
            <h3 className="font-medium leading-snug text-slate-200"><a href="https://github.com/vp007-dev/Smart-Surveillance-System-with-NAS">🧠 Smart Surveillance System with NAS, AI Face Recognition, and Video Sorting</a></h3>
            <p className="mt-2 text-sm leading-normal">Smart Surveillance uses AI for face recognition and tracking in video footage. Integrated with NAS, it auto-sorts videos into categorized folders based on identified faces,</p>
            <p className="mt-2 text-sm leading-normal">offering an efficient and automated security solution.</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            </ul>
          </section>
          
        </div>
      </div>
    </>
  );
}
