import React,{useState,useEffect} from 'react'
import List from './List'
import axios from 'axios'
import { MainContainer } from '../style/MainPageCSS';

const MainPage = () => {
  const [PostList, setPostList] = useState([]);
  const [Sort, setSort] = useState("최신순");
  const [SearchTerm, setSearchTerm] = useState("");
  const [Skip, setSkip] = useState(0);
  const [LoadMore, setLoadMore] = useState(true);

  const getLoadMore = () => {
    let body = {
      sort: Sort,
      searchTerm: SearchTerm,
      skip: Skip,
    };
    axios
      .post("/api/post/list", body)
      .then((response) => {
        if (response.data.success) {
          setPostList([...PostList, ...response.data.postList]);
          setSkip(Skip + response.data.postList.length);
          if (response.data.postList.length < 5) {
            setLoadMore(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPostList = () => {
    setSkip(0);

    let body = {
      sort: Sort,
      searchTerm: SearchTerm,
      skip: 0,
    };

    axios
      .post("/api/post/list", body)
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
          setSkip(response.data.postList.length);
          if (response.data.postList.length < 5) {
            setLoadMore(false);
          }
          if (response.data.postList.length == 0) {
            setLoadMore(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostList();
  }, [Sort]);

  const SearchHandler = () => {
    getPostList();
  };

  return (
    <MainContainer>
      <div className='filter'>
        <div className='search'>
          <input placeholder='제목,내용' type='text' value={SearchTerm} onChange={(e) => setSearchTerm(e.currentTarget.value)} onKeyDown={(e) => {
                if (e.keyCode === 13) SearchHandler();
              }}/>
          <button onClick={()=>SearchHandler()}>검색</button>
        </div>
        <select className='select' onChange={(e)=>setSort(e.target.value)}>
          <option>최신순</option>
          <option>인기순</option>
        </select>
      </div>
      <List postList={PostList}/>
      <div className='footer'>
        {LoadMore && <button onClick={()=>getLoadMore()}>더 보기</button>}
      </div>
    </MainContainer>
  )
}

export default MainPage