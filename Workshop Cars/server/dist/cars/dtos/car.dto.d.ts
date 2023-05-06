import { Car } from "../interface/car.interface";
export declare class CarCreateDto {
    brand: string;
    model: string;
    year: number;
    price: number;
    color: string;
    isAvailable: boolean;
}
export declare class CarResponseDto extends CarCreateDto implements Car {
    id: string;
    deletedAt?: Date;
}
export declare class CarUpdateDto extends CarCreateDto {
}
