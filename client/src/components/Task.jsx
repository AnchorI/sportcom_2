import React from 'react';

class Task extends React.Component{

// TODO Вставить сюда
    // Сюда вставить все что пришлю

    render() {
        const id = this.props.match.params.id;
        let {task} = this.props;
        console.log("Я отрисовалась!")
        return(
            <div>
                <h3>{id}</h3>
            </div>
        );}
}

export default Task;