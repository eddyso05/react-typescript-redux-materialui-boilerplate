import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store ,{history} from './redux/store'
import { RootProps } from './types/common'

const render = (Component: React.FC<RootProps>)  => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
  
render(App)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
