import {useState} from "react";


function IterationComponentQ() {


  const [list, setList] = useState([{src:"/img/img1.png", product:"아이폰10", price:1000},
                                    {src:"/img/img2.png", product:"아이폰11", price:2000},
                                    {src:"/img/img3.png", product:"아이폰12", price:3000},
                                    {src:"/img/img4.png", product:"아이폰13", price:4000}
                                  ])

  const [img, setImg] = useState('');

  function handleClick(src){
    setImg(src)
  }


  const result = list.map((item)=><div key={item.src} onClick={() => handleClick(item.src)}><img src={item.src}/><br/>상품 : {item.product}<br/>가격 : {item.price}</div>)




  //style={{color : color}}

  return(

    <div>
      <h1>이미지 데이터 반복해보기</h1>
      <img src={img} alt="사진없음" />
      
      <div style={{display:"flex"}}>
        {result}
      </div>
    </div>
  )
}

export default IterationComponentQ