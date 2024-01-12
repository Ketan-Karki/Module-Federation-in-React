import React from "react";
const Button = React.lazy(() => import("MicroFrontend/Button"));

export default function App() {
  return (
    <div>
      Shell Application
      <Button buttonName={"Click Here"} />
    </div>
  );
}
