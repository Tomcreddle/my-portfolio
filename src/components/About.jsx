// About.jsx
import { useScrollReveal } from '../useScrollReveal'

const skills = [
  { category: 'Frontend', items: 'HTML5, CSS3, JavaScript ES6+, React.js' },
  { category: 'Backend', items: 'Node.js, REST APIs, Nodemailer, Google APIs' },
  { category: 'Databases', items: 'Firebase Realtime Database, AWS DynamoDB' },
  { category: 'Mobile', items: 'Android Studio, Java, XML Layouts' },
  { category: 'Data & Analytics', items: 'Data Cleaning, Reporting, LLM Tool Testing' },
  { category: 'Tools', items: 'Git, Firebase Console, Microsoft Office Suite' },
]

export default function About() {
  const [titleRef, titleVisible] = useScrollReveal()
  const [textRef, textVisible] = useScrollReveal()
  const [skillsRef, skillsVisible] = useScrollReveal()

  return (
    <section
      id="about"
      className="px-4 md:px-10 py-12 md:py-20 flex flex-col items-center text-center"
      style={{ background: '#0a0a14' }}
    >
      <h2
        ref={titleRef}
        className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
        style={{
          color: '#ffffff',
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateX(0)' : 'translateX(-40px)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        About Me
      </h2>

      <p
        ref={textRef}
        className="text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto"
        style={{
          color: '#cbd5e1',
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? 'translateX(0)' : 'translateX(-40px)',
          transition: 'opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s',
        }}
      >
        I'm an Information Technology graduate from Technological Institute of the Philippines (TIP Manila)
        with hands-on experience in full-stack web development, Android app development, data analytics,
        and cloud database integration. I recently completed a Data Analyst Internship at Kyros Technologies,
        where I worked on data cleaning, automation scripts, and LLM-assisted reporting workflows. I enjoy
        building responsive, user-friendly applications using React.js, Node.js, and Firebase/AWS DynamoDB.
      </p>

      <h3 className="text-base md:text-lg font-semibold mb-4" style={{ color: '#a78bfa' }}>
        Skills
      </h3>

      <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto w-full">
        {skills.map((skill, i) => (
          <div
            key={skill.category}
            className="p-4 rounded-lg text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              backdropFilter: 'blur(8px)',
              opacity: skillsVisible ? 1 : 0,
              transform: skillsVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: `opacity 0.6s ease-out ${i * 0.1}s, transform 0.6s ease-out ${i * 0.1}s`,
            }}
          >
            <h4 className="font-semibold text-sm mb-1" style={{ color: '#a78bfa' }}>
              {skill.category}
            </h4>
            <p className="text-xs md:text-sm" style={{ color: '#94a3b8' }}>
              {skill.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}