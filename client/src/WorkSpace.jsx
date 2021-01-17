import React from 'react';
import Category from "./Category";
import Connect from './service/connect'

class WorkSpace extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {
        Connect.getAll('/categories').then(
            (response) => {
                this.setState({
                    data: response.data
                });
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                this.setState({
                    error: _content
                });

            }
        );

    }
    render() {
        const {error, isLoaded, data} = this.state;

        if(data){
            return (
                <div>
                    {data.map(function (e, i, arr) {
                        return(
                            <div>
                               <Category catName={data[i].name} title={data[i].title}></Category>
                            </div>
                        )
                    })}
                </div>
            )
        }
        return <div><h1>1</h1></div>
    }
}
export default WorkSpace;