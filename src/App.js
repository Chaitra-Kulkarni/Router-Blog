import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";

function App() {

  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ]);
  const [searchResults, setSearchResults] = useState('');

  return (
    <div className="App">
      <Header title="ReactJs Blog" />
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
