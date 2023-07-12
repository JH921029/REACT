import {useState} from "react";



function EventComponentQ(){


  const [data, setData] = useState('메뉴를 선택하세요');

  const handleChange = (e) => {
    setData(e.target.value)
  }


  return(

    <div>
      <h1>셀렉트 태그 핸들링(실습)</h1>
      <h3>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</h3><br/>
      <select onChange = {handleChange}>
        <option>햄버거</option>
        <option>피자</option>
        <option>치킨</option>
      </select>
      <h1>선택한 결과</h1>
      <h2>{data}</h2>
      
    </div>

  )


}

export default EventComponentQ