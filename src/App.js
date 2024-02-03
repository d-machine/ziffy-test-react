import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import BlogsList from './BlogsList'
import Blogs from './Blogs'
import Home from './Home'
import Blog from './Blog'
import CreateBlog from './CreateBlog'

function App() {
  return (
      <Router>
        <nav style={{margin: 10}}>
          <Link to="/" style={{padding: 5}}>
            Home
          </Link>
          <Link to="/blogs" style={{padding: 5}}>
            Blogs
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />}>
                <Route index element={<BlogsList />} />
                <Route path=":id" element={<Blog />} />
            </Route>
            <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </Router>
  );
}

export default App;
