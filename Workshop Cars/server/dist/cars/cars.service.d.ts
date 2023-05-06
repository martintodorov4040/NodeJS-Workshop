import { CarCreateDto, CarResponseDto, CarUpdateDto } from "./dtos/car.dto";
import { Repository, DeleteResult } from "typeorm";
import { Car } from "./car.entity";
import { carQueryDto } from "./dtos/car-query.dto";
export declare class CarsService {
    private carRepository;
    constructor(carRepository: Repository<Car>);
    getCars(query: carQueryDto): Promise<CarResponseDto[]>;
    getCarById(id: string): Promise<CarResponseDto>;
    createCar(body: CarCreateDto): Promise<CarResponseDto>;
    updateCar(id: string, updateData: CarUpdateDto): Promise<CarResponseDto>;
    updateCarPrice(id: string, price: number): Promise<CarResponseDto>;
    updateCarAvailability(id: string, isAvailable: boolean): Promise<CarResponseDto>;
    deleteCar(id: string): Promise<DeleteResult>;
}
