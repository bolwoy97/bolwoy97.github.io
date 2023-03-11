import { useEffect, useState } from "react";

export default function Competencies(): JSX.Element {
  const [competencies, setCompetencies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/main_page/competencies")
      .then((response) => response.json())
      .then(({ data }) => {
        setCompetencies(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <h2>Competencies</h2>
      <ul>
        {competencies.map(({name, value}) => {
          return (
            <li>
              <p>{name}</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${value}%` }}></div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
