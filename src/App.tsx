import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Alumni from './pages/Alumni'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import Academics from './pages/Academics'
import StudentLife from './pages/StudentLife'
import Admissions from './pages/Admissions'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import SEO from './components/SEO'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEO />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsArticle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
