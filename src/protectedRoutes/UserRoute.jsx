import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserRoute({ children }) {
    const navigate = useNavigate();
    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:3210/api/v1/user/check-user",
                    {
                        withCredentials: true,
                    },
                );

                const data = res.data;
                console.log(data);

                if (data.success === false) {
                    navigate("/signup", { replace: true });
                }
            } catch (error) {
                console.error("Error occurred while checking user:", error);
                navigate("/signup", { replace: true });
            }
        };
        checkUser();
    }, [navigate]);

    return children;
}
