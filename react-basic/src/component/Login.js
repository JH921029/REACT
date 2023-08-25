

function Login() {
  
  return(

    <>
    <div className="wrap">

        <div className="titleBox">
            <a>🙈</a>
        </div>

        <form className="loginForm">

            <input className="inputText" type="text" placeholder="아이디"></input>
            <input className="inputText" type="text" placeholder="패스워드"></input>
            <button className="loginBtn" type="button">로그인</button>
            <div className="findInfo">
                <ul>
                    <li>
                        <a href="#">아이디찾기</a>
                        <span style={{color: '#999'}}> | </span>
                        <a href="#">비밀번호찾기</a>
                    </li>
                </ul>
            </div>
        </form>

        <div className="joinWrap">
            <button type="button" className="joinBtn">고객 회원가입</button>
            <button type="button" className="joinBtn">작업자 회원가입</button>
        </div>


    </div>
    </>
  )


}

export default Login;