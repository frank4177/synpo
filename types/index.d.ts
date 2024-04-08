type Amenity = string; 

export type ReviewDataTypes = {
    amenities: Amenity[]; 
    anonymous: boolean;
    id: string;
    rating: number;
    review: string;
    time: string; 
};