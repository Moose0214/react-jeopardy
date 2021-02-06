/*** Copy this code block to Welcome.js ***/
import React from "react";
function Welcome(props) {
  console.log(props);
  let name = (props.match && props.match.params.name) || props.name;
  return <div className="Welcome">Welcome, {name}!</div>;
}
export default Welcome;
