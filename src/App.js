import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Navbar from "./components/Navbar";
import logo from "./images/pokeball.svg";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <AppContainer>
            <Navbar />
            <Header>
              <Logo src={logo} alt="logo" />
              <h1>Pokesearch</h1>
              <Counter />
            </Header>
          </AppContainer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
  background-color: var(--dark);
`;
const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: calc(10px + 2vmin);
`;
const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: App-logo-float infinite 3s ease-in-out;

  @keyframes App-logo-float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
