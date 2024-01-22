import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import CoverOne from './components/cover/CoverOne';
import AboutMeOne from './components/aboutme/AboutMeOne'
import Skillsone from './components/skills/Skillsone';
import Skillstwo from './components/skills/Skillstwo';
import Skillsthree from './components/skills/Skillsthree';
import Projectone from './components/projects/Projectone';
import Projecttwo from './components/projects/Projecttwo';
import Question from './components/question/Question';
import Test from './components/Test';
import { DataProvider } from './context/DataContext';
import SkillsTemplate from './components/question/SkillsTemplate';
import AboutTemplate from './components/question/AboutTemplate';
import ProjectTemplate from './components/question/ProjectTemplate';

function App() {
  return (
    <DataProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/coverone" element={<CoverOne/>} />
        <Route path="/aboutmeone" element={<AboutMeOne/>} />
        <Route path="/skills1" element={<Skillsone/>} />
        <Route path="/skills2" element={<Skillstwo/>} />
        <Route path="/skills3" element={<Skillsthree/>} />
        <Route path="/project1" element={<Projectone/>} />
        <Route path="/project2" element={<Projecttwo/>} />
        <Route path="/question" element={<Question/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/abouttemplate" element={<AboutTemplate/>} />
        <Route path="/skillstemplate" element={<SkillsTemplate/>} />
        <Route path="/projecttemplate" element={<ProjectTemplate/>} />


      </Routes>
    </Router>
    </DataProvider>
  );
}

export default App;
