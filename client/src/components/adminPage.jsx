import React from 'react';
import axios from "axios";

class AdminPage extends React.Component{

    state = {
      isLoaded : null,
        Items : []
    };

    componentDidMount() {
        axios.get(`localhost:1234/cart/get`)
            .then(res => {
                this.setState( {Items : res.data} );
            })
    }

    render() {
        return(
            <div>
1232
            </div>
        );
    }

}
export default AdminPage;