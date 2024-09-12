import NavigationBar from "./components/navigationbar";

import useWidth from "./helpers/useWidth";

//import Home from "./components/home";

const App = () => {
  const windowWidth = useWidth();

  return (
    <>
      <NavigationBar windowWidth={windowWidth}/>
      {/*<Home windowWidth={windowWidth}/>*/}
    </>
  )
}

export default App
