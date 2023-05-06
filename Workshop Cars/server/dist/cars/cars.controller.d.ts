import { CarsService } from "./cars.service";
import { CarCreateDto, CarResponseDto, CarUpdateDto } from "./dtos/car.dto";
import { carQueryDto } from "./dtos/car-query.dto";
export declare class CarsController {
    private readonly carService;
    constructor(carService: CarsService);
    getCars(query: carQueryDto): Promise<CarResponseDto[]>;
    getCarsById(id: string): Promise<CarResponseDto>;
    createCar(body: CarCreateDto): Promise<CarResponseDto>;
    updateCar(id: string, updateData: CarUpdateDto): Promise<CarResponseDto>;
    updateCarPrice(id: string, price: number): Promise<CarResponseDto>;
    updateCarAvailability(id: string, isAvailable: boolean): Promise<CarResponseDto>;
    deleteCar(id: string): Promise<any>;
}
