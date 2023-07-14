import axios from "axios"
import { useEffect, useState } from "react"



function App() {


  /* 
  npm install axios 설치
  */

  const [data, setData] = useState({})
  const [name, setName] = useState({})
  console.log(data);
  console.log(name);

  const handleClick = () => {
    /* 
    fetch의 반환 promise
    axios의 반환 promise
    결론 == 문법이 똑같다.
    */

    /* 
    이 데이터를 화면에 로드될때 axios로 select태그의 옵션으로 처리해주세요
    https://raw.githubusercontent.com/yopy0817/data_example/master/by.json
     */


    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      .then(response => setData(response.data))
    //{"userId": "kkk123", "userPw": 1234, "userName": "홍길자"}
  }

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
      .then(response => setName(response.name))
  }, [])

  // [
  //   {"key": "1", "value": "홍길동" },
  //   {"key": "2", "value": "이순신" },
  //   {"key": "3", "value": "홍길순" }
  // ]

  // const [raw, setRaw] = useState();
  // //화면 로드시 데이터를 불러오기

  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data);
  //     })
  // }, [])




  //const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
  //const newSelect = select.map((item, index)=><option key={index}>{item}</option>)

  return (

    <div>
      <h3>엑시오스 사용하기</h3>
      <button onClick={handleClick}>데이터 가져오기</button>

      <p>
        {data.userId}<br />
        {data.userPw}<br />
        {data.userName}
      </p>

    </div>
  )
}
export default App