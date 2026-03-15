export interface CategoryCard {
    id: number;
    title: string;
    image: string;
    bgColor: string;
    link: string;
}

export interface WhyChooseUsCard {
    id: number;
    title: string;
    icon: string;
    description: string;
}

export type PopularProduct = {
    id: number;
    title: string;
    bgImg: string;
    midImg: string;
    frontImg: string;
};