import DashboardNav from "../components/DashboardNav";
import Newcalc from "../components/Newcalc";

const Dashboarduser =() => {
    return(
        <>

            <div className="container-fluid p-1">
                <DashboardNav />
            </div>

            <div className="container">
                <Newcalc />
            </div>
        </>
    );
};

export default Dashboarduser;