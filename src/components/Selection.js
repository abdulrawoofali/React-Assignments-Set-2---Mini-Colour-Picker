import React,{useState} from "react";
const Selection = (props) => {
  const { applyColor } = props;
  const [styleVariable, setStyleVariable] = useState({background:""});
  
  return (
    <>
      <div
        className="fix-box"
        style={styleVariable}
        onClick={() => applyColor((color)=> {
            setStyleVariable(color)
        } )}
      >
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
};

export default Selection;
