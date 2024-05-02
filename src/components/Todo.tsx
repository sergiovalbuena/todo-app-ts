import { type Todo as TodoType } from "../types";

type Props = TodoType;

export const Todo: React.FC<Props> = ({ id, text, isCompleted }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={isCompleted}
        onChange={() => {}}
      />
      <label>{text}</label>
      <button className="destroy" onClick={() => {}} />
    </div>
  );
};
