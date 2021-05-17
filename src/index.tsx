import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store ,{history} from './redux/store'
import { ThemeProvider } from '@material-ui/core/styles';
import { RootProps } from './types/common'
import theme from './utils/theme';

const render = (Component: React.FC<RootProps>)  => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component history={history} />
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
}
  
render(App)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
