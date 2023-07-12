import {useState} from "react";

function StateComponent(){
//state - 컴포넌트 안에서 변화하는 값(즉 상태변수)
// const result = useState('초기값')
// const a = result[0];//현재값
// const b = result[1];//함수


const [data, setData] = useState('초기값');
const [num, setNum] = useState(0);
const [color, setColor] = useState('red');
// state는 직접 수정하면 안됩니다. setter를 사용하세요

//state는 이벤트 or 특정 함수안에서 바꾸도록 처리합니다.
//setDate('변경해야지'); 무한루프
const handleData = () =>{
  setData('체인지');//비동기적으로 state값을 변경 - 화면을 리랜더링 하게 됩니다.
  setNum('10');
  setColor('yellow');
}


//빨간색 변경
// const handelColor = () => setColor('red');
// const handelColor2 = () => setColor('blue');
// const handelColor3 = () => setColor('pink');
return(
  <div>
    스테이트 값 : {data}
    <br/>
    스테이트 값 : {num}
    <br/>
    스테이트 값 : {color}
    <br/>
    <button onClick={handleData}>스테이트값 변경</button>


    <br/>
    <h3 style={{color : color}}>{data}</h3>

    <button onClick={() => setColor('red')}>붉은색</button>
    <button onClick={() => setColor('blue')}>푸른색</button>
    <button onClick={() => setColor('yellow')}>그 사이 3초색</button>
  </div>

)
}

export default StateComponent;