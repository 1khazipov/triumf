import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import ExamPreparation from './pages/ExamPreparation';
import Feedback from './pages/Feedback';
import News from './pages/News';
import HowToFind from './pages/HowToFind';
import Teachers from './pages/Teachers';
import Schedule from './pages/Schedule';
import Students from './pages/Students';
import StudentsByYear from "./pages/StudentsByYear";
import './styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exam-preparation" element={<ExamPreparation />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/news" element={<News />} />
          <Route path="/how-to-find" element={<HowToFind />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:studentYear" element={<StudentsByYear />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
