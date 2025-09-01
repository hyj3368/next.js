import Button from "./Button";
import Input from "./Input";

const Register = (props) => {
  return (
    <div>
      <Input change={props.change} />
      <Button click={props.click} />
    </div>
  );
};
export default Register;
