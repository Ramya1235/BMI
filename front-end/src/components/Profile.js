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
                    <h4>Admin Access : {user.isAdmin ? "Yes" : "No"}</h4>
                </div>

            </Card>
        </div>
    );
};

export default ConnectNav;


