import React from 'react';
import { Provider } from 'react-redux'
import { AppContainer, AppIndexContainer } from './App.styles'
import Header from './Components/Header/Header.component';
import Index from './Routes/Routes';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <AppIndexContainer>
          <Index />
        </AppIndexContainer>
      </AppContainer>
    </Provider>
  );
}

export default App;
