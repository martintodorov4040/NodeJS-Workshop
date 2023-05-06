"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carProvider = void 0;
const car_entity_1 = require("./car.entity");
exports.carProvider = [
    {
        provide: "CAR_REPOSITORY",
        useFactory: (dataSource) => dataSource.getRepository(car_entity_1.Car),
        inject: ["DATA_SOURCE"],
    },
];
//# sourceMappingURL=cars.providers.js.map