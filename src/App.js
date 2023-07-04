import './App.css';
import Layout from './layouts/rootLayout';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Layout />
      < ProjectsPage />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
