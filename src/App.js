import {Provider} from 'react-redux';
import styled from 'styled-components';
import InputBox from './components/InputBox';
import {store} from './store/store';
import TodoList from './components/TodoList';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30rem;
  margin: 0px auto;
`;

const StyledHeading = styled.h3`
  color: green;
  display: block;
  text-transform: uppercase;
  font-size: x-large;
  align-self: center;
`

function App() {
  return (
    <Provider store={store}>
      <StyledContainer>
        <StyledHeading>Todos Manager</StyledHeading>
        <InputBox />
        <TodoList />
      </StyledContainer>
    </Provider>
  );
}

export default App;
