import { getBackEndUrl } from "../../../utils/config";
import { useQuery } from "react-query";
import Spinner from "../../common/Spinner";

export default function Competencies(): JSX.Element {
  // const [competencies, setCompetencies] = useState([]);
  const backUrl = getBackEndUrl();

  const { isLoading, error, data: competencies = [] } = useQuery("todos", () =>
    fetch(`${backUrl}/resume/competencies`)
      .then((response) => response.json())
      .then(({ data }) => data)
      .catch((err) => {
        console.log(err.message);
      })
  );

  return (
    <>
      <h2>Competencies</h2>
      <ul>
        {isLoading && <Spinner />}
        {competencies.map(({ name, value }: { name: string, value: string }) => {
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
