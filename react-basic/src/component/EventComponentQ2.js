import {useState} from "react";



function EventComponentQ2(){


  const [form, setForm] = useState({data: '', result: ''});


  const handleChange = (e) =>{
    setForm({data: e.target.value, result:form.result})
  }


  const handleClick = () =>{
    setForm({data:'', result: form.data})

  }



  return(

    <div>
      <h2>인풋데이터 핸들링(실습)</h2><br/>
      클릭시 데이터는 공백으로 결과는 인풋이 압력한 값으로 처리
      힌트는? 아마도 state는 두개가 필요할듯?
      <br/>
      <input type="text" onChange={handleChange} value={form.data}/>
      <button type="button" onClick={handleClick}>추가하기</button>
      <h2>결과</h2>
      {form.result}
    </div>
  )
}

export default EventComponentQ2