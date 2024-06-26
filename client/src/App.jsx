import React from 'react'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
const Home = React.lazy(()=>import("./pages/Home"));
const Dashboard = React.lazy(()=>import("./pages/Dashboard"));
const Problems = React.lazy(()=>import("./pages/Problems"));
const Courses = React.lazy(()=>import("./pages/Courses"));
const Leaderboard = React.lazy(()=>import("./pages/Leaderboard"));
const Tests = React.lazy(()=>import("./pages/Tests"));
const Playground = React.lazy(()=>import("./pages/Playground"));
const UploadForm = React.lazy(()=>import("./pages/UploadForm"));

import Sidebar from "./components/Sidebar"
function App() {
  return (
    <>
      <Router>
        <div className="flex">
        <Sidebar />
        <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playground' element={<Playground />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/problems' element={<Problems />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/tests' element={<Tests />} />
          <Route path='/problems/upload' element={<UploadForm />} />
        </Routes>
        </React.Suspense>
        </div>
      </Router>
    </>
  )
}

export default App
