import { ReactElement } from "react";

export interface Service {
    title: string;
    description: string;
    icon: string;
    content?: ReactElement;
}