

function MyComponent3({title, content, writer}){


  return (
    <div>
      타이틀 : {title}<br/>
      콘텐츠 : {content}<br/>
      롸이터 : {writer}<br/>
    </div>
  )


  
}

MyComponent3.defaultProps = {
  writer : 'admin'
}

export default MyComponent3