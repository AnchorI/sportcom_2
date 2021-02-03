import React from 'react';
import TaskCard from "./taskCard";

class Task extends React.Component{

// TODO Вставить сюда
    // Сюда вставить все что пришлю

    render() {
        let  id  = this.props.match.params.id;
        let {item} = this.props;
        const Id = [id];

        console.log("Item", item);
        const FiltredItem = item.filter(e=>Id.find(i=>i === e._id));
        console.log(FiltredItem);
        return(
            <div>

                {FiltredItem.map((item) => (
                     <div>
                         <h1>Заявка номер :{item._id}</h1>
                         <h1>Имя: {item.name}</h1>
                         <h1>Телефон: {item.Phone}</h1>
                         <h3>Ифонрациия о заявке</h3>
                         {item.items[0].map((item)=>(<div>
                             <h4>Имя райдера: {item.name}</h4>
                             <h5>Id райдера: {item.user_id}</h5>
                         </div>))}
                     </div>
                ))}
            </div>
        );
    }
}

export default Task;