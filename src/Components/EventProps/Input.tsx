import React from "react";
type inputChange={
  
}
const Input = ({ value }: inputChange) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <form action="">
        <input type="text" value={value} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default Input;
