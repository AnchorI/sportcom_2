
const Rider = (props) => {
    const {name, id, img} = props;
    return(
        <div>
            <img src={img} alt={id}/>
            <h3>{name}</h3>
        </div>

    );

};




export default Rider;