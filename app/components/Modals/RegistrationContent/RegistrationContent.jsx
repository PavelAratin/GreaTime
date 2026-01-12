import { CheckGreenIcon } from "../../icons/CheckGreenIcon/CheckGreenIcon";

export const RegistrationContent = ({ type, title }) => {
  return (
    <>
      {type === "success" ? <CheckGreenIcon></CheckGreenIcon> : ""}
      <p>{title}</p>
    </>
  );
};
