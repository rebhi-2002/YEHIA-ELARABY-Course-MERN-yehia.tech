// import Description from "./components/Description";
// import Desc from "./components/Description";

import { Description, Description2 } from "./components/Description";
import { Description as Desc } from "./components/Description";

import Title from "./components/Title";
const component = <h1>Hello</h1>;

function App() {
  const className = "main";
  const title = <div>123</div>;
  return (
    // <div className={className}>
    //   {/* <h1>Hello</h1> */}
    //   {component}
    //   <Title />
    //   <Description />
    //   <Desc />
    //   <Description2 />
    // </div>
    <>
      {/* <Title title="My Title" another="test" /> */}
      {/* <Title title={<div>123</div>} another="test" /> */}
      {/* <Title title={title} another="test" /> */}
      <Title>
        <div>132</div>
        <div>234324</div>
      </Title>
      <Description />
    </>
  );
}

export default App;
