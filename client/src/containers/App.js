import {connect} from 'react-redux';
import * as ridersActions from "../actions/rider";
import {bindActionCreators} from "redux";
import orderBy from 'lodash/orderBy'

import App from '../component/App'

const sortBy = (riders , filterBy, searchQuery) => {
    let finded = riders;
    switch (filterBy) {
        case 'all':
            return riders;
        case 'BMX' :
           finded = orderBy(riders, 'cat', 'desc');
        default:
            return riders;
    }

};
/*
TO-DO
* Сделать фильтр по категориям
* Сделать загрузку после открытия категори
* Прикрутить Чек Аут написанный егором
* Добавить вывод команд внутри которых райдеры
 */





/*
const filterRiders = (riders, searchQuery) =>
{if(riders){
    riders.filter(o => o.cat.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0);
}

};


const searchRiders = (riders,searchQuery) => {
    return sortBy(filterRiders(riders,searchQuery));
}; */

const mapStateToProps = ({ riders, filter }) => ({

    riders: riders /* && searchRiders(riders.item, filter.filterBy, filter.searchQuery)  */,
    isReady: riders.isReady
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(ridersActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
