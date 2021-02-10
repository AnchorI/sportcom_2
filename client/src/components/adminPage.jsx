import React from "react";
import axios from "axios";
import {Switch,NavLink,Route} from "react-router-dom";
import TaskCard from "./taskCard";
import back from '../img/back.svg'
import Task from "../containers/Task";
class AdminPage extends React.Component {

  componentDidMount() {
    const {setTask} = this.props;
    axios.get("http://localhost:1234/cart/get").then(({data})=>{
      setTask(data);
    })};

  render() {
    const { isReadyAdmin} = this.props;
    let {task} = this.props;

    if(task == null){
      task = [];
    }
    return (
        <div className='Grid_Admin'>
          <nav className='NavBar'>

              <NavLink  to='/admin'><img src={back} alt=""/></NavLink>
              <NavLink  to='/admin'>Все заявки</NavLink>

          </nav>
          <Switch>
          <Route   path='/admin/:id' component={Task}/>
          <Route exact path='/admin'
                 render={()=><CardRender task={task}/>}/>
          </Switch>



        </div>
    );
  }
}

export default AdminPage;

function CardRender(props) {
   const {task} = props;
  return(
      <div className='AdminPage_Grid_Container'>
      {task.map((item) => (
            <TaskCard {...item} />
        ))}</div>
  );
};
