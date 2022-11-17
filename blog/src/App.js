import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '블로그 제목 입니다.'
  let [글제목, 글제목변경] = useState(['1번 제목', '2번 제목', '3번 제목']);
  let [좋아요, 좋아요증가] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '뭐가문제냐'
        글제목변경(copy);
      }}>변경</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 좋아요증가(좋아요+1) }}>🤞</span> { 좋아요 } </h4>
        <p>_월 _일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>_월 _일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>_월 _일 발행</p>
      </div>
      
      <Modal/>

    </div>
  );
}

function Modal(){
  return(
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
