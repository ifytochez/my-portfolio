import styles from "./skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.heading}>
        My <span className={styles.highlight}>Skills</span>
      </h2>

      <div className={styles.skillsWrapper}>
        <div className={styles.technical}>
          <h3 className={styles.subheading}>Technical Skills</h3>

          {[
            { label: "HTML", percent: 90, icon: "bxl-html5", color: "#e34c26" },
            { label: "CSS", percent: 90, icon: "bxl-css3", color: "#264de4" },
            {
              label: "JavaScript",
              percent: 70,
              icon: "bxl-javascript",
              color: "#f0db4f",
            },
            {
              label: "React",
              percent: 80,
              icon: "bxl-react",
              color: "#61dafb",
            },
            {
              label: "NextJs",
              percent: 50,
              icon: "bx-code-alt",
              color: "#ffffff",
            },
            {
              label: "Tailwind",
              percent: 80,
              icon: "bxl-tailwind-css",
              color: "#38bdf8",
            },
            { label: "SASS", percent: 75, icon: "bxl-sass", color: "#cd6799" },
            {
              label: "TypeScript",
              percent: 85,
              icon: "bxl-typescript",
              color: "#3178c6",
            },
          ].map((skill, index) => (
            <div key={index} className={styles.barWrapper}>
              <span className={styles.techLabel}>{skill.label}</span>
              <i
                className={`bx ${skill.icon}`}
                style={{ fontSize: "1.5rem", color: skill.color }}
              ></i>
              <div className={styles.bar}>
                <div
                  style={{ width: `${skill.percent}%` }}
                  className={styles.fill}
                >
                  <span className={styles.barLabel}>{skill.percent}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.professional}>
          <h3 className={styles.subheading}>Professional Skills</h3>
          <div className={styles.circularWrapper}>
            {[
              { label: "Collaboration", value: 90 },
              { label: "Communication", value: 95 },
              { label: "Problem Solving", value: 85 },
              { label: "Resilience", value: 90 },
              { label: "Attention to Detail", value: 92 },
              { label: "Creativity", value: 80 },
              { label: "Agile Methodologies", value: 85 },
              { label: "Time Management", value: 88 },
              { label: "Code Review", value: 80 },
              { label: "Adaptability", value: 87 },
            ].map((skill, index) => (
              <div key={index} className={styles.circle}>
                <svg viewBox="0 0 36 36" className={styles.svg}>
                  <path
                    className={styles.bg}
                    d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={styles.progress}
                    strokeDasharray={`${skill.value}, 100`}
                    d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className={styles.percentage}>
                    {skill.value}%
                  </text>
                </svg>
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
