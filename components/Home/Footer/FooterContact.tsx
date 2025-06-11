import React from "react";

type Props = {
    label: string;
    value: string;
};

const FooterContacUs = ({ label, value }: Props) => {
    return (
        <div className = "mt-6">
            <h1 className = "text-sm text-gray-600">{label}</h1>
            <h1 className = "text-base font-bold text-blue-950 mt-1">{value}</h1>
        </div>
    )
}

export default FooterContacUs;