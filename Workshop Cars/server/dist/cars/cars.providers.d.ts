import { DataSource } from "typeorm";
import { Car } from "./car.entity";
export declare const carProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Car>;
    inject: string[];
}[];
