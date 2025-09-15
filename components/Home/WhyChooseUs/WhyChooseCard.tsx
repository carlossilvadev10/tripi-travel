import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>;

const WhyChooseCard = ({ image, title, description, ...rest }: Props) => {
    return (
        <div {...rest}>
        {/* Imagen */}
        <Image src={image} alt = "image" width={70} height={70} className = "mx-auto" />
        {/* Contenido */}
        <h1 className = "mt-6 text-center text-gray-900 font-medium text-lg">
            {title}
        </h1>
        <p className = "mt-2 text-center text-xs font-medium text-gray-700">
            {description}
        </p>
        </div>
  );
};

export default WhyChooseCard;