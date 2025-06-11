import React from "react";

type Props = {
    title: string;
    items: string[];
};

const FooterSection = ({ title, items }: Props) => {
    return (
        <div className = "space-y-5">
            <h1 className = "text-lg font-bold">
                {title}
            </h1>
            {items.map((item, index) => (
                <p key = {index} className = "text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
                    {item}
                </p>
            ))}
        </div>
    )
}

export default FooterSection;