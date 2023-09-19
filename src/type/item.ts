import type { Category } from "./category";
import type { Option } from "./option";

export type Item = {
    id: number;
    title: string;
    description?: string;
    sellingPrice?: string;
    category: Category;
    numberOfRooms?: number;
    numberOfToilets?: number;
    numberOfKitchens?: number;
    numberOfLivingRooms?: number;
    country?: string;
    city?: string;
    surface?: number;
    floorsNumber?: number;
    availabilityDate?: Date;
    createdDate?: Date;
    rentPrice?: number;
    caution?: number;
    imageList?: string[];
    option?: Option;
    address?:string; 
}