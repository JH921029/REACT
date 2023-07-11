import {Fragment} from 'react';
import MyComponent from './component/MyComponent';
import MyComponent2 from './component/MyComponent2';
import MyComponent3 from './component/MyComponent3';



function App(){
  return(
    <Fragment>
    <div>나의 새로운 컴포넌트</div>
    <MyComponent name={'홍길동'} age={20} addr={'서울시'} email={'상위@naver.com'}/>
    <MyComponent name={'이순신'} age={30} addr={'경기도'} writer={null} />


    {/* 클래스형 컴포넌트 */}
    <MyComponent2 name={'신사임당'} age={40}/>

    {/* 
    함수형 컴포넌트 MyComponent3을 생성합니다.
    Props는 title, content, writer를 전달합니다.
    writer는 기본값은 'admin'으로 선언해주세요.
  */}
  <br/>
  <MyComponent3 title={'제목입니다'} content={'내용입니다'}/>
    </Fragment>
  )
}

export default App