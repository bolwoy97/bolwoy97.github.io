import { useEffect, useState } from "react";
import { getBackEndUrl } from "../../../utils/config";

export default function Competencies(): JSX.Element {
  const [competencies, setCompetencies] = useState([]);
  const backUrl = getBackEndUrl();

  useEffect(() => {
    fetch(`${backUrl}/resume/competencies`)
      .then((response) => response.json())
      .then(({ data }) => {
        setCompetencies(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [backUrl]);

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
