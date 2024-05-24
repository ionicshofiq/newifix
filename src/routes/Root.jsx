import { Outlet } from 'react-router-dom';
import Navbar from '../sharred/navbar/Navbar';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default Root;