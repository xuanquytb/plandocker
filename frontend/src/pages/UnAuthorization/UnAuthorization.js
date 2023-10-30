import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UnAuthorization = () => {
    const navigate = useNavigate();
    useEffect(() => {
        toast.info("Bạn không có quyền vào trang này");
    }, []);

    return (
        <div>
            <button
                onClick={() => {
                    navigate(-1);
                }}
            >
                Trở lại
            </button>
        </div>
    );
};

export default UnAuthorization;
