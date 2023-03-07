import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
		<div className="main-content">
			<header>
				<h1>Leonid Shadrin</h1>
				<h2>Software Development Engineer</h2>
			</header>

			<section>
				<h3>About Me:</h3>
				<p>I am a Node-React developer with 3+ years of experience in building scalable and high-performance
					applications.
					I am seeking a challenging position in a dynamic project where I can leverage my skills
					to design and develop innovative solutions that solve complex business problems.
				</p>
			</section>
			<section>
				<h3>Experience:</h3>
				<div className="experience">
					<h4>
						<p> Dec 2022 – Present:
							Senior Software Engineer, SoftServe, full-time </p>
						<p>Jun 2021 – Dec 2022:
							Middle Software Engineer, SoftServe, full-time </p>
						<p className="technologies"> (Hapi.js, React.js, TypeScript, JavaScript,
							Ruby
							on Rails) </p>
					</h4>
					<ul className="responsibilities">
						<li>Contributed to the development of a Node.js and React.js -based platform for Administering
							the big healthcare system</li>
						<li>Worked closely with designers and project managers to ensure project requirements were met
						</li>
						<li>Developed RESTful APIs using Hapi.js</li>
						<li>Created reusable React.js components</li>
						<li>Styled elements with Tailwind CSS</li>
						<li>Utilized MongoDB for database design and development</li>
						<li>Worked with Ruby on Rails GraphQL service</li>
						<li>Doing configuration management, CI, updating Node/packages to higher versions</li>
						<li>Participated in daily stand-ups, sprint planning, and code reviews</li>
						<li>Debugged and tested code to ensure functionality and performance</li>
						<li>Working with Cloud (AWS, Azure)</li>
						<li>Was assisting DevOPS team in app containerization and Nginx management</li>
						<li>Was doing cross-team knowledge transfer sessions, technical interviews and onboarding. </li>
						<li>Participated in daily stand-ups, sprint planning, and code reviews</li>
						<li>Has experience being a presenter for the beginner frontend marathon.</li>
					</ul>
				</div>
				<div className="experience">
					<h4>
						<p> Now 2020 – Jun 2021:
							Middle back-end developer, Magisoft Solutions, full-time
						</p>
						<p className="technologies"> (Nest.js, Express.js, TypeScript, JavaScript)
						</p>
					</h4>
					<ul className="responsibilities">
						<li>Developed and maintained several Node.js based web applications</li>
						<li>Designed and developed RESTful APIs and implemented Swagger for API documentation</li>
						<li>Implemented authentication and authorization using Passport.js and JSON Web Tokens (JWT)
						</li>
						<li>Participated in sprint planning and code reviews</li>
						<li>Conducted code testing and debugging</li>
						<li>Implemented a Telegram bot to receive orders </li>
					</ul>
				</div>
				<div className="experience">
					<h4>
						<p> Aug 2017- Nov 2020:
							Web Developer, seasonal
						</p>
						<p className="technologies"> (CodeIgniter, raw PHP, Vue js).
						</p>
					</h4>
					<ul className="responsibilities">
						<li>Built applications from scratch </li>
						<li>Maintained applications lifecicle</li>
						<li>Testing/debugging apps</li>
						<li>Developed complicated business logic</li>
					</ul>
				</div>
			</section>

			<section>
				<h3>Education:</h3>
				<ul>
					<li>01.09.2018 – 31.12.2019 - <b> National University of Kryvyi Rih - Master's Degree in Software
							engineering</b></li>
					<li>01.09.2014 – 30.06.2018 - <b>National University of Kryvyi Rih - Bachelor's Degree in Software
							engineering</b></li>
				</ul>
			</section>

			<section>
				<h3>Major skills:</h3>
				<ul className="skills">
					<li>Node.js</li>
					<li>React.js</li>
					<li>Hapi.js</li>
					<li>Express.js</li>
					<li>Nest.js</li>
					<li>TypeScript</li>
					<li>JavaScript</li>
					<li>MySQL</li>
					<li>MongoDB</li>
				</ul>
				<h4>Minor skills:</h4>
				<ul className="skills">
					<li>Ruby on Rails</li>
					<li>Laravel</li>
					<li>Ruby</li>
					<li>PHP</li>
				</ul>
			</section>
		</div>

		<div className="sidebar">

			<div className="photo">
				<img src="./resouces\me.jpg" alt=""></img>
			</div>

			<h2>Competencies</h2>
			<ul>
				<li>
					<p>JavaScript</p>
					<div className="progress-bar">
						<div className="progress" style={{width: "80%"}}></div>
					</div>
				</li>
				<li>
					<p>TypeScript</p>
					<div className="progress-bar">
						<div className="progress" style={{width: "75%"}}></div>
					</div>
				</li>
				<li>
					<p>
					React.js</p>
					<div className="progress-bar">
						<div className="progress" style={{width: "60%"}}></div>
					</div>
				</li>
				<li>
					<p>Node.js</p>
					<div className="progress-bar">
						<div className="progress" style={{width: "80%"}}></div>
					</div>
				</li>
				<li>
					<p>HTML</p>
					<div className="progress-bar">
						<div className="progress" style={{width: "60%"}}></div>
					</div>
				</li>
				<li>
					<p>CSS</p>
					<div className="progress-bar">
						<div className="progress" style={{width: "50%"}}></div>
					</div>
				</li>
				<li>
					<p>MongoDB</p>
					<div className="progress-bar">
						<div className="progress" style={{width: "75%"}}></div>
					</div>
				</li>
				<li>
					<p>MySQL</p>
					<div className="progress-bar">
						<div className="progress" style={{width: "75%"}}></div>
					</div>
				</li>
			</ul>

			<h2>Personal Information</h2>
			<ul>
				<li>
					<p>Name:</p>
					<p>Leonid Shadrin</p>
				</li>
				<li>
					<p>Email:</p>
					<p>bolwoy97@gmail.com</p>
				</li>
				<li>
					<p>Phone:</p>
					<p>+38097-342-0770</p>
				</li>
				<li>
					<p>Location:</p>
					<p> Kryvyi Rih, Ukraine</p>
				</li>
			</ul>
			<div className="links">
				<h2>Links</h2>
				<ul>
					<li><a href="https://www.linkedin.com/in/leonid-shadrin-999346155">LinkedIn</a>
					</li>
					<li><a href="https://djinni.co/q/9e97853a55/">Djinni</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
  );
}

export default App;
