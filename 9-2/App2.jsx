import React, { useState, useEffect } from "react";
import './App2.css';

const serverURL = "http://localhost:65020/users";

function App2() {

  const [userData, setUserData] = useState(null);
  const [Err, setErr] = useState(null);

  const getUserData = () => {
    fetch(serverURL)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .then(console.log(userData))
  }

  useEffect(getUserData, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const id = event.target.id.value;
    const passwd = event.target.passwd.value;
    console.log("Submit버튼 클릭후 서버로 POST 전송");
  

  fetch(serverURL, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, id, passwd}),
    })
    .then(getUserData())
  }

  const onSubmitHandler2 = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const id = event.target.id.value;
    for(var i = 0; i < userData.length; i++) {
      if(name == userData[i].name && id == userData[i].id) {
          setErr("회원으로 확인되었습니다.");
          break;
      } else {
          setErr("그런 회원은 없습니다.");
      }
  }
  }

  return (
    <>
      <div>
        <h2> 회원등록 </h2>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="name" placeholder="이름 "/>
          <input type="text" name="id" placeholder="아이디 "/>
          <input type="text" name="passwd" placeholder="암호 "/>
          <button type="submit"> 등록 </button>
        </form>
      </div>
      <p> </p>

      <div>
        <h2> 회원확인 </h2>
        <form onSubmit={onSubmitHandler2}>
          <input type="text" name="name" placeholder="이름 "/>
          <input type="text" name="id" placeholder="id "/>
          <button type="submit"> 확인 </button>
        </form>
        <p style={{color:"red"}}>{ Err }</p>
      </div>
      <p> </p>
      
      <div>
        <h2> 회원 목록</h2>
        <ol>
          {(userData === null) ? (
            <p> 서버에서 데이터를 가져오는 중...</p>
          ): (
            userData.map((user,i) => (
              <li key={user.keyid} > {user.name} {user.id} {user.passwd} </li>
            ))
          )}
        </ol>
      </div>
    </>
  );
}

export default App2;
