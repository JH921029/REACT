import { useEffect, useState } from "react";

function App() {

  //1st - 에러를 피하려면 유즈스테이트에 빈 객체 넣기
  //const [data, setData] = useState({});

  //2nd
  const [data, setData] = useState();

  const handleClick = () => {

    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })

  }


  const [raw, setRaw] = useState();
  //화면 로드시 데이터를 불러오기
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      .then(response => response.json())
      .then(data => {
        setRaw(data);
      })
  }, [])

  console.log(1);

  return (
    <div>
      <h3>fetch로 데이터 가져오기</h3>

      <p>버튼클릭시 데이터가져오기</p>
      <button onClick={handleClick}>데이터로드</button>
      {
        data !== undefined ?
          <p>
            {data.userId}<br />
            {data.userPw}<br />
            {data.userName}
          </p>
          :
          null
      }

      <p>데이터 로드시 가져오기</p>
      {
        raw !== undefined ?
          <p>
            {raw.userId}<br />
            {raw.userPw}<br />
            {raw.userName}
          </p>
          :
          null
      }

    </div>
  )
}
export default App