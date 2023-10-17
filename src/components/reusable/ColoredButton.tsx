import { motion } from 'framer-motion';
import tinycolor, { ColorFormats } from 'tinycolor2';
import { useEffect, useState } from "react";
import { FormModalState } from "@typings";

interface ColorButtonProps {
    text: string;
    handleClick?: () => void;
    className?: string;
}

const generateComplementaryColors = (colors: string[]): ColorFormats.RGBA[] => {
    const complementaryColors: ColorFormats.RGBA[] = [];

    colors.forEach((color) => {
        const baseColor = tinycolor(color);
        const complementaryColor = baseColor.complement().toRgb();

        complementaryColors.push(complementaryColor);
    });

    return complementaryColors;
};

const ColorButton = ({ text, handleClick, className }: ColorButtonProps) => {
    const baseColors = ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"];
    const [complementaryColors, setComplementaryColors] = useState<ColorFormats.RGBA[]>([]);

    useEffect(() => {
        const generatedColors = generateComplementaryColors(baseColors);
        setComplementaryColors(generatedColors);
    }, []);

    const colorVariants = complementaryColors.map((color) => tinycolor(color).toHexString());

    return (
        <motion.button
            className={`${className}`}
            whileHover={{
                backgroundColor: colorVariants,
                transition: { duration: 2, repeat: Infinity }
            }}
            onClick={handleClick}
        >
            {text}
        </motion.button>
    );
};

export default ColorButton;