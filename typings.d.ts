import { StaticImageData } from "next/image";

export interface ProjectWorksProps {
    id?: number;
    subConClassName?: string;
    imgClassName: string;
    pageImg: StaticImageData;
    img: StaticImageData;
    alt: string;
    width: number;
}

export interface IndividualProject {
    id?: number;
    pageImg: StaticImageData;
    img: StaticImageData;
    projectTitle: string;
    techUsed: string;
    description: string;
    pageLink: string;
}

export interface FormModalState {
    isOpen: boolean;
    isAliasOpen: boolean;
}