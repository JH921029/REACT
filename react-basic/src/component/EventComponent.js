import {useState} from "react";

function EventComponent(){

  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');

  const handleChange = (e) =>{
    setName(e.target.value);
    //마지막으로 input태그 value속성에 리엑트 state를 적습니다.
  }

  const handleKeyUp = (e) =>{
    //엔터를 쳤을 때 동작함
    if(e.key ==='Enter'){
      console.log('엔터를 눌렀음');
      handleClick();
    }
    }

    const handleClick = () => {
      alert(`${name}님의 할일 목록 ${topic}`);
      setName('');//초기화
      setTopic('');//초기화
    }



  return(
<div>
    <h3>리엑트 이벤트 핸들링(인풋 태그의 change)</h3>
    <input type="text" onChange={handleChange} value={name}/>
    변경된 값: {name}
    <br/>

    <h3>리액트 이벤트(keyup)</h3>
    <input type="text" onChange={(e) => setTopic(e.target.value)}
                       onKeyUp={handleKeyUp} 
                       value={topic} />
    
    변경된 값: {topic}
    <br/>

    <h3>리엑트 이벤트(click)</h3>
    <button onClick={handleClick}>클릭미</button>
</div>

  )
}

export default EventComponent;