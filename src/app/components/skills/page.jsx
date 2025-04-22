import styles from "./skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>
        My <span className={styles.highlight}>Skills</span>
      </h2>

      <div className={styles.skillsWrapper}>
        <div className={styles.technical}>
          <h3 className={styles.subheading}>Technical Skills</h3>

          <div className={styles.barWrapper}>
            <span className={styles.techLabel}>HTML</span>
            <i
              className="bx bxl-html5"
              style={{ fontSize: "1.5rem", color: "#e34c26" }}
            ></i>
            <div className={styles.bar}>
              <div style={{ width: "90%" }} className={styles.fill}>
                <span className={styles.barLabel}>90%</span>
              </div>
            </div>
          </div>

          <div className={styles.barWrapper}>
            <span className={styles.techLabel}>CSS</span>
            <i
              className="bx bxl-css3"
              style={{ fontSize: "1.5rem", color: "#264de4" }}
            ></i>
            <div className={styles.bar}>
              <div style={{ width: "90%" }} className={styles.fill}>
                <span className={styles.barLabel}>90%</span>
              </div>
            </div>
          </div>

          <div className={styles.barWrapper}>
            <span className={styles.techLabel}>JavaScript</span>
            <i
              className="bx bxl-javascript"
              style={{ fontSize: "1.5rem", color: "#f0db4f" }}
            ></i>
            <div className={styles.bar}>
              <div style={{ width: "70%" }} className={styles.fill}>
                <span className={styles.barLabel}>70%</span>
              </div>
            </div>
          </div>

          <div className={styles.barWrapper}>
            <span className={styles.techLabel}>React</span>
            <i
              className="bx bxl-react"
              style={{ fontSize: "1.5rem", color: "#61dafb" }}
            ></i>
            <div className={styles.bar}>
              <div style={{ width: "80%" }} className={styles.fill}>
                <span className={styles.barLabel}>80%</span>
              </div>
            </div>
          </div>

          <div className={styles.barWrapper}>
            <span className={styles.techLabel}>NextJs</span>
            <i
              className="bx bx-code-alt"
              style={{ fontSize: "1.5rem", color: "#fff" }}
            ></i>
            <div className={styles.bar}>
              <div style={{ width: "50%" }} className={styles.fill}>
                <span className={styles.barLabel}>50%</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.professional}>
          <h3 className={styles.subheading}>Professional Skills</h3>
          <div className={styles.circularWrapper}>
            {[
              { label: "Collaboration", value: 90 },
              { label: "Communication", value: 100 },
              { label: "Problem Solving", value: 80 },
              { label: "Resilience", value: 90 },
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
