import { img06 } from "../assets";

const ImproveSkills = () => {
  const list = [
    "Learn new recipes",
    "Experiment with food",
    "Write your own recepies",
    "Know nutrition facts",
    "Get cooking tips",
  ];

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src={img06} alt="food" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <button className="btn">join now</button>
      </div>
    </div>
  );
};

export default ImproveSkills;
