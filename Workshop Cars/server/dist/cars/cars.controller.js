"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cars_service_1 = require("./cars.service");
const car_dto_1 = require("./dtos/car.dto");
const car_query_dto_1 = require("./dtos/car-query.dto");
let CarsController = class CarsController {
    constructor(carService) {
        this.carService = carService;
    }
    getCars(query) {
        return this.carService.getCars(query);
    }
    getCarsById(id) {
        return this.carService.getCarById(id);
    }
    createCar(body) {
        return this.carService.createCar(body);
    }
    updateCar(id, updateData) {
        return this.carService.updateCar(id, updateData);
    }
    updateCarPrice(id, price) {
        return this.carService.updateCarPrice(id, price);
    }
    updateCarAvailability(id, isAvailable) {
        return this.carService.updateCarAvailability(id, isAvailable);
    }
    deleteCar(id) {
        return this.carService.deleteCar(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_query_dto_1.carQueryDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getCars", null);
__decorate([
    (0, common_1.Get)("id/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getCarsById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_dto_1.CarCreateDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "createCar", null);
__decorate([
    (0, common_1.Put)("update/:id"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, car_dto_1.CarUpdateDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "updateCar", null);
__decorate([
    (0, common_1.Patch)(":id/price/:price"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("price", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "updateCarPrice", null);
__decorate([
    (0, common_1.Patch)(":id/isAvailable/:isAvailable"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("isAvailable")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "updateCarAvailability", null);
__decorate([
    (0, common_1.Delete)("delete/:id"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "deleteCar", null);
CarsController = __decorate([
    (0, swagger_1.ApiTags)("Cars"),
    (0, common_1.Controller)("cars"),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
exports.CarsController = CarsController;
//# sourceMappingURL=cars.controller.js.map