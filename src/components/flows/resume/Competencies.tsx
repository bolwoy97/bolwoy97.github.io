export default function Competencies(): JSX.Element {
  return (
    <>
      <h2>Competencies</h2>
      <ul>
        <li>
          <p>JavaScript</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
        </li>
        <li>
          <p>TypeScript</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "75%" }}></div>
          </div>
        </li>
        <li>
          <p>React.js</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "60%" }}></div>
          </div>
        </li>
        <li>
          <p>Node.js</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
        </li>
        <li>
          <p>HTML</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "60%" }}></div>
          </div>
        </li>
        <li>
          <p>CSS</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "50%" }}></div>
          </div>
        </li>
        <li>
          <p>MongoDB</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "75%" }}></div>
          </div>
        </li>
        <li>
          <p>MySQL</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "75%" }}></div>
          </div>
        </li>
      </ul>
    </>
  );
}
