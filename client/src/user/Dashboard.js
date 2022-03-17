



import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import Navlogout from "../components/Navlogout"
import Profilescreen from "../components/Profile";

const Dashboard =() => {
    return(
        <>
        
            <div className="container-fluid  p-3">
                {/* <ConnectNav/> */}
            </div>

            <div className="container-fluid p-4">
                <DashboardNav />
            </div>
           
            <div className="container">
              <Profilescreen />
            
            </div>
        </>
    );
};

export default Dashboard;