import { useParams } from "react-router-dom";

export const PollDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Детали опроса {id}</h1>
      <p>Это подробная информация о выбранном опросе.</p>
    </div>
  );
};
