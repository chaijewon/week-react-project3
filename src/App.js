import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
// 서버에서 데이터를 읽어올때
/*
   useState
   useEffect => componentDidMount()
 */
class App extends Component{
  // 생성자 => state설정,이벤트 등록
  /*
   state ==> 외부에서 데이터를 읽어 올때 사용
   ===== 변경이 가능한 변수  ==> useState()
   */
  constructor(props) {
    super(props);
    //state설정
    this.state={
      movie:[]
    }
  }
 /* state={

  }*/
  // 화면 출력전에 서버에서 데이터를 읽어서 state에 저장
  componentDidMount() {
     axios.get('http://localhost:3355/movie').then((result)=>{
        this.setState({movie:result.data})
        // setState()=> render()호출 => 데이터를 다시 출력
        // 화면 갱신(Update)
     })
  }
  // 화면 출력
  render(){
    const html=this.state.movie.map((m)=>
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="/w3images/lights.jpg">
              <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                <div className="caption">
                  <p>{m.title}</p>
                </div>
            </a>
          </div>
        </div>
    )
    return (
        <div className={"row"}>
          <h1 className={"text-center"}>현재 상영영화</h1>
            {html}
        </div>
    )
  }
}

export default App;
