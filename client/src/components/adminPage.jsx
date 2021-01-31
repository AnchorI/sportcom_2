import React from "react";
import axios from "axios";
import TaskCard from "./taskCard";

class AdminPage extends React.Component {

  componentDidMount() {
    const {setTask} = this.props;
    axios.get('/data/cart.json').then(({data})=>{
      setTask(data);
    })};

  render() {
    const { isReadyAdmin} = this.props;
    let {task} = this.props;

    if(task == null){
      task = [];
    }
    return (
      <div>
        {task.map((item) => (
          <TaskCard {...item} />
        ))}
      </div>
    );
  }
}

export default AdminPage;
