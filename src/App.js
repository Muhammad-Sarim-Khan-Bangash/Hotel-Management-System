import './App.css';
import AppRouter from './config/AppRouter'
import { Provider } from 'react-redux';
import store from './store'
import Navbar from './components/Navbar'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <AppRouter />
    </Provider>
  );
}

export default App;
