import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <>
        <header className="flex flex-col min-h-96 bg-blue-400 items-center justify-center mb-8">
            <h1 className="text-8vw font-sono font-bold text-white">CREATORVERSE</h1>
            <div className="flex gap-5">
                <button className="card bg-slate-200 h-3/6 px-6 py-3
                 text-lg sm:px-4 sm:py-2 sm:text-base md:px-6
                  md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-xl"
                  onClick={() => navigate("/")}>VIEW ALL CREATORS</button>
                <button 
                className="card bg-slate-400 h-3/6 px-6 py-3 text-lg sm:px-4 
                sm:py-2 sm:text-base md:px-6 md:py-3
                 md:text-lg lg:px-8 lg:py-4 lg:text-xl"
                 onClick={() => navigate("/new")}>ADD A CREATOR</button>
            </div>
        </header>
            <Outlet></Outlet>
        </>
    );
}
export default Header;