import { useSelector } from "react-redux";

const useAuth = () => {
    return useSelector((state) => state);
};

export default useAuth;
