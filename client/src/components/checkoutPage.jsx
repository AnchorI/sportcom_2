import React from 'react'
import Calendary from './calendary';
import { format } from 'date-fns'
import {enGB} from "date-fns/locale";
import {Link} from 'react-router-dom';
import Finish from './Finish';
import axios from "axios";
import items from "../containers/CategoryPage";

class CheckoutPage extends React.Component{


    state = {
        name: '',
        phone: '',
        email: '',
        items: this.props,
    };

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    };
    handleChangePhone = event => {
        this.setState({ phone: event.target.value });
    };
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const {items} = this.state;
        const user = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            items: items.items,

        };
        console.log(user);

        axios.post('http://localhost:1234/cart/create',{...user, ...items},{
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            // withCredentials: false,
            // credentials: 'same-origin',
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChangeName} />
                        Phone:
                        <input type="number" name="phone" onChange={this.handleChangePhone}/>
                        Email:
                        <input type="email" name="email" onChange={this.handleChangeEmail}/>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }


//<----------------------- TODO Will be delete in next commit

// state = {
//     name : '',
//     Phone: '',
//     Email: ''
//
// };
//
//
//      // Up   = (value) => {this.setState({ dataEnd : value}) };
//      // Down = (value) => {this.setState({ dataStart : value})};
//
//     handleChangeName = event => {
//         this.setState({name: event.target.value});
//     };
//     handleChangePhone = event => {
//         this.setState({Phone: event.target.value});
//     };
//     handleChangeEmail = event => {
//         this.setState({Email: event.target.value});
//     };
//
//     handleSubmit = event => {
//         event.preventDefault();
//
//         const items = {
//             name: this.state.name,
//             Phone: this.state.phone,
//             Email: this.state.email
//         };
//
//
//
//         console.log(items);
//
//         axios.post('http://localhost:1234/cart/create',items,{
//             method: 'POST',
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Content-Type': 'application/json',
//             },
//             // withCredentials: false,
//             // credentials: 'same-origin',
//         })
//             .then(res => {
//                 console.log(items);
//                 console.log(res);
//                 console.log(res.data);
//             })
//
//     }
//
//     Loaders = (value) => this.setState({Loader : value});
//
//     render() {
//
//     const {dataStart,dataEnd} = this.state;
//     const {items} = this.props;
//     const {Loaded} = this.props;
//         let {Loader} = this.state;
//     console.log(this.props);
//         const Loaders = this.Loaders;
//    if(Loader){ return(
//       <div>
//            <Link to="/"> <button onClick={Loaded.bind(null, true)}>Назад</button></Link>
//           <form onSubmit={this.handleSubmit}>
//               <input type='text' name="name" placeholder='ФИО' onChange={this.handleChangeName}/>
//               <input type='number' name="phone" placeholder="Номер телефона" onChange={this.handleChangePhone}/>
//               <input type="email" name="email" placeholder="Email" onChange={this.handleChangeEmail}/>
//               <input type='checkbox' value='Viber'/>
//               <input type='checkbox' value='WhatsApp'/>
//               <input type='checkbox' value='Telegram'/>
//               <button type="submit">Add</button>
//               <div className="calendary-container"><Calendary Up={this.Up} Down={this.Down}/></div>
//           </form>
//             <button onClick={Loaders.bind(null, false)}>Оставить заявку</button>
//         </div>
//         );} else if(!Loader){
//        return (<Finish/>);
//    }
//
//     };
};
export default CheckoutPage;
