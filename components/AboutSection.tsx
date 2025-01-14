import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Node.js" },
  { skill: "PostgreSQL" },
  { skill: "GitHub" },
  { skill: "VS Codium" },
  { skill: "Trello" },
  { skill: "Web Design" },
  { skill: "Design Thinking" },
  { skill: "Linux" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
{/* changed parts */}
            <p>
              Hi, my name is Eleonore and I am a{" "}
              <span className="font-bold">{"committed"}</span>,
              <span className="font-bold">{" goal-oriented"}</span>, and
              <span className="font-bold">{" resourceful"}</span> open source project manager
              based in France.
            </p>
            <br />
            <p>
              I graduated from Lille III University in 2008
              with a Master's in International cooperation organisations Management and Intercultural projects Engineering. Amongst a few years directing a professional dancers center and artistic productions, I started driving the digital transformation of 200 cultural operators in 2012. I have been dedicated to free software alternatives ever since.
            </p>
            <br />
            <p>
              I have a wide range of (paradoxal sometimes) interests that keep me busy.
              From reading graphic novels, performing Taï Chi, traveling / hiking / bikepacking, to making ceramics,
              I am always seeking ways to get creative and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                always question
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for arts &
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
{/* end of changed parts */}
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
