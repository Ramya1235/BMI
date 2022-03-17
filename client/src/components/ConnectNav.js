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
                {/* <Meta 
                    avatar={user.name[0]} 
                    title={user.name} 
                    // Email = {user.email}
                    // Admin Access = {user.isAdmin ? "Yes" : "No"}
                    description={`Joined ${moment(user.createdAt).fromNow()}`}
                /> */}
                <div>
                    Name : {user.name}
                    Email : {user.email}
                    {/* <h1>Admin Access : {user.isAdmin ? "Yes" : "No"}</h1> */}
                </div>

            </Card>
        </div>
    );
};

export default ConnectNav;

