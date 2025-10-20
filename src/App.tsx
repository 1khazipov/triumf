import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layot/Layout';
import Home from './pages/home/Home'; 
import './styles/App.css';

const About = lazy(() => import('./pages/about/About'));
const ExamPreparation = lazy(() => import('./pages/exam-preparation/ExamPreparation'));
const Feedback = lazy(() => import('./pages/feedback/Feedback'));
const News = lazy(() => import('./pages/news/News'));
const HowToFind = lazy(() => import('./pages/how-to-find/HowToFind'));
const Teachers = lazy(() => import('./pages/teachers/Teachers'));
const Schedule = lazy(() => import('./pages/schedule/Schedule'));
const Students = lazy(() => import('./pages/students/Students'));
const StudentsByYear = lazy(() => import("./pages/students-by-year/StudentsByYear"));
const Post = lazy(() => import("./pages/post/Post"));

const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
    Загрузка страницы...
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/exam-preparation" element={<ExamPreparation />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/news" element={<News itemsPerPage={10} />} />
            <Route path="/how-to-find" element={<HowToFind />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:studentYear" element={<StudentsByYear />} />
            <Route path="/news/post/:postId" element={<Post />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;