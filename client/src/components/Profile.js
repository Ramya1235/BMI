import { useSelector } from "react-redux";
import { Card, Avatar } from 'antd';
import moment from "moment";

const { Meta } = Card

const ConnectNav = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    console.log(auth);
    const { user } = auth;

    return (
        <div className="d-flex justify-content h5">
            <Card>
                <div>
                    <h4>Name : {user.name} </h4>
                    <h4>Email : {user.email}</h4>
                    {/* <h4>Admin Access : {user.isAdmin ? "Yes" : "No"}</h4> */}
                </div>

            </Card>
        </div>
    );
};

export default ConnectNav;












// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// function Profilescreen() {
//     const { auth } = useSelector((state) => ({ ...state }));
//     const user = JSON.parse(localStorage.getItem('currentUser'))
//     console.log(user)
//     console.log(auth);
//     return (
//         <div className="mt-5 ml-3">
//             <h1>Name : {auth.userState.user.name}</h1>
//             <h1>Email : {auth.userState.user.email}</h1>
//             <h1>Admin Access : {auth.userState.user.isAdmin ? "Yes" : "No"}</h1>
//         </div>
//     )
// }

// export default Profilescreen;