import Image from "next/image";
import "@fontsource/inter";
import CustomCursor from "./customCursor";
import './cursor.css';


export default function Home() {
  return (
    <>
    <div className="background-container"> <CustomCursor /> </div>
      <div className="container"> <header className="header">
      <h1 className="name">Vansh Pandey</h1> 
      <p className="tagline">Computer Science UnderGrad 👨‍🎓.</p> 
      {/* <h1>                  </h1> */}
      <br></br>
      <p className="Content">I build games, websites and softwares || Learning AI/ML, Deep Learning.</p> 
      {/* <p className="Content">Have been coding for 5 years!.</p>  */}
      <nav className="nav hidden lg:block">
        <ul className="mt-16 w-max">
          <li>
            <a className="group flex items-center py-3 " href="#about">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 text-lg">About</span>
            </a>
          </li>
          <br></br>
          <li>
            <a className="group flex items-center py-3 " href="#experience">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 text-lg">Experience</span>
            </a>
          </li>
          <br></br>
          <li>
            <a className="group flex items-center py-3 " href="#projects">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 text-lg">Projects</span>
            </a>
          </li>
        </ul>
      </nav>
      </header> 
      </div>
      <div className="content">
      <div className="about">
        <section id="about">
        Hi, I’m Vansh Pandey—a curious and driven Computer Science student specializing in Artificial Intelligence and Machine Learning at Sharda University. I’m passionate about solving complex problems and creating experiences that bridge the gap between technology and imagination.

My journey began with an insatiable curiosity for the stars and a knack for building things. Over the years, this evolved into a diverse portfolio, from developing games with SDL2, PhaserJS, and Unity to building responsive web applications with ReactJS and Next.js. I’m equally fascinated by space exploration and the mysteries of the cosmos, which often inspire my projects, like my astronomy-focused app, Symphony of Stars.

I thrive in collaborative environments and have actively contributed to open-source communities, including projects like Simple Icons and VS Code. Whether it’s designing a thrilling game where every choice has a twist ending or creating dynamic web experiences, I bring creativity, technical expertise, and a problem-solving mindset to the table.
        </section>
      </div>
      <div className="experience">
        <section id="experience">
          YO FUCK OFF
        </section>
      </div>
      </div>
    

    </>
  );
}
