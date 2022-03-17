function Tablerow(props) {

    return (

        <tr>
            <td>{props.name}</td>

            <td>{props.height}</td>

            <td>{props.mass}</td>

            <td>{props.bmi}</td>
            
        </tr>
    )
}

export default Tablerow;