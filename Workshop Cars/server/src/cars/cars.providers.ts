import { DataSource } from "typeorm";
import { Car } from "./car.entity";

export const carProvider = [
  {
    provide: "car-repository",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Car),
    inject: ["data-source"],
  },
];
