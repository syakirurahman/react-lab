import React, { useState, useEffect } from "react";
import UserService from 'services/UserService';

export default function InfiniteScrollNoLibrary() {

  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if(!noData) {
        loadUserList(page);
      }
    }
  }

  useEffect(() => {
    loadUserList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUserList = (page) => {
    setLoading(true);
    setTimeout(() => {
      UserService.getList(page)
        .then((res) => {
          const newPage = page + 1;
          const newList = userList.concat(res.data);
          setUserList(newList);
          setPage(newPage);
          if(res.data.length===0)
            setNoData(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() =>{
          setLoading(false);
        })
      }
    ,1500);
  }

  return (
    <div>

      <div className="section">

        {userList.map((user, i) => 
          ( 
          <div className="box m-3 user" key={i}>
            <img src={user.avatar} alt={user.first_name}/>
            <div className="user-details">
              <strong>Email</strong>: {user.email}<br/> 
              <strong>First Name</strong>: {user.first_name}<br/> 
              <strong>Last Name</strong>: {user.last_name}<br/>
            </div>
          </div>
          )
        )}
        {loading ?  <div className="text-center">loading data ...</div> : "" }
        {noData ? <div className="text-center">no data anymore ...</div> : "" }    
      </div>
    </div>
  );
}
