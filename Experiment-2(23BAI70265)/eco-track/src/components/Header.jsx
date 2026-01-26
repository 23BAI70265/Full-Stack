import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
    const { login, logout, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const isLoggingIn = useRef(false);

    const isLogin = Boolean(user);

    useEffect(() => {
        if (user && isLoggingIn.current && location.pathname === "/login") {
            isLoggingIn.current = false;
            navigate("/dashboard", { replace: true });
        }
    }, [user, navigate, location.pathname]);

    const handleSubmit = () => {
        if (isLogin) {
            logout();
            navigate("/login", { replace: true });
        } else {
            isLoggingIn.current = true;
            login("real-jwt-token");
        }
    };

    return (
        <div className="flex items-center mx-auto mt-4 justify-between h-14 min-w-xl max-w-6xl px-10 shadow-lg rounded-full">
            <div className="flex items-center gap-3">
                <h1 className="text-xl font-semibold text-gray-700">Eco-Track</h1>
            </div>

            <button onClick={handleSubmit}>
                {isLogin ? "Logout" : "Login"}
            </button>
        </div>
    );
};

export default Header;
