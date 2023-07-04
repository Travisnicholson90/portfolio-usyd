import './App.css';
import Layout from './layouts/rootLayout';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import Form from './components/Form/Form'

function App() {
  return (
    <div className="App">
      <Layout />
      < ProjectsPage />
      <Form />
    </div>
  );
}

export default App;
