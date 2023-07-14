import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h3>메인 페이지</h3>

            {/* a는 Link로 바뀝니다. */}
            <ul>
                <li>
                    <Link to="/user">회원페이지</Link>
                </li>
                <li>
                    <Link to="/user?id=aaa123&name=홍길동">회원페이지</Link>
                </li>
                <li>
                    <Link to="/info/1/홍길동">인포페이지</Link>
                </li>
                <li>
                    <Link to="/info/2/홍길서">인포페이지</Link>
                </li>
                <li>
                    <Link to="/info/3/홍길남">인포페이지</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
