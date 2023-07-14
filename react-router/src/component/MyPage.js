import { Navigate } from "react-router-dom";

function MyPage() {

  const loginYN = false;

  /* const nav = useNavigate();
  if (!loginYN) {
    nav('/');
  }
 */
  //to=경로, replace=기록을 남기는지 여부
  if (!loginYN) {
    return <Navigate to='/' replace={true} />
  }

  return (
    <div>
      <h3>여기는 권한이 있는 사람만 접근 할 수 있음</h3>
    </div>
  );

}
export default MyPage