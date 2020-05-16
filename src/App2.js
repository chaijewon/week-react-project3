import React,{Component,Fragment} from "react";
import axios from 'axios'
class App2 extends Component{
    constructor(props) {
        super(props);
        this.state={
            movie:[],
            detail:{}
        }
    }
    // /movie_home?no=1
    componentDidMount() {
       axios.get('http://localhost:3355/movie_home',{
           params:{
               no:1
           }
       }).then((result)=>{
           this.setState({movie:result.data})
           console.log(this.state.movie)
       })
    }
    onMovie(no)
    {
        axios.get('http://localhost:3355/movie_home',{
            params:{
                no:no
            }
        }).then((result)=>{
            this.setState({movie:result.data})
            console.log(this.state.movie)
        })
    }
    render() {
        const html=this.state.movie.map((m)=>
           <tr>
               <td><img src={"http://www.kobis.or.kr"+m.thumbUrl} width={"35"} height={"35"}/></td>
               <td>{m.movieNm}</td>
               <td>{m.director}</td>
               <td>{m.genre}</td>
           </tr>
        )
      return (
          <Fragment>
            <div className="row" style={{"margin":"0px auto"}}>
                <button className={"btn btn-sm btn-primary"} onClick={this.onMovie.bind(this,1)}>박스오피스</button>
                <button className={"btn btn-sm btn-danger"} onClick={this.onMovie.bind(this,2)}>실시간 예매율</button>
                <button className={"btn btn-sm btn-success"} onClick={this.onMovie.bind(this,3)}>좌석 점유율</button>
                <button className={"btn btn-sm btn-info"} onClick={this.onMovie.bind(this,4)}>온라인 이용순위</button>
            </div>
            <div className="row" style={{"margin":"0px auto"}}>
                 <div className={"col-sm-6"}>
                   <table className={"table"}>
                       <thead>
                         <tr>
                             <th className={"text-center"}></th>
                             <th className={"text-center"}>영화명</th>
                             <th className={"text-center"}>감독</th>
                             <th className={"text-center"}>장르</th>
                         </tr>
                       </thead>
                       <tbody>
                       {html}
                       </tbody>
                   </table>
                 </div>
                 <div className={"col-sm-6"}>

                </div>
            </div>
          </Fragment>
      )
  }
}

export default App2;