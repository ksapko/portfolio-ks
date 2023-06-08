import "./experience.css";
import { CgWorkAlt } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="container experience-container">
        <h3 className="work-title">{<CgWorkAlt />}Work</h3>
        <div className="timeline">

          <div className="timeline-item">
            <div className="circle-dot"></div>
            <h3 className="timeline-title">ENTE</h3>
            <p className="timeline-text">internship</p>
            <span className="timeline-date">{<AiOutlineCalendar />}2022</span>
          </div>

          <div className="timeline-item">
            <div className="circle-dot"></div>
            <h3 className="timeline-title">uMnieDziała.it</h3>
            <p className="timeline-text">practice</p>
            <span className="timeline-date">{<AiOutlineCalendar />}2021</span>
          </div>

          <div className="timeline-item">
            <div className="circle-dot"></div>
            <h3 className="timeline-title">Biuro Ekspertyz Sądowych</h3>
            <p className="timeline-text">practice</p>
            <span className="timeline-date">{<AiOutlineCalendar />}2021</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
