import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const { user, loading } = useSelector((state) => state.auth);

    if (loading) {
        return <div>Checking authentication...</div>;
    }

    if (user) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;