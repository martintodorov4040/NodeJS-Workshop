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
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let CarsService = class CarsService {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }
    getCars(query) {
        let whereQuery = {};
        if (query === null || query === void 0 ? void 0 : query.brand) {
            whereQuery = Object.assign(Object.assign({}, whereQuery), { brand: (0, typeorm_1.ILike)(`%${query.brand}%`) });
        }
        if (query === null || query === void 0 ? void 0 : query.color) {
            whereQuery = Object.assign(Object.assign({}, whereQuery), { color: (0, typeorm_1.ILike)(`%${query.color}%`) });
        }
        if (query === null || query === void 0 ? void 0 : query.year) {
            whereQuery = Object.assign(Object.assign({}, whereQuery), { year: query.year });
        }
        return this.carRepository.find({
            where: whereQuery,
        });
    }
    getCarById(id) {
        return this.carRepository.findOne({ where: { id } });
    }
    createCar(body) {
        return this.carRepository.save(body);
    }
    async updateCar(id, updateData) {
        return this.carRepository.save(Object.assign(Object.assign({}, updateData), { id: id }));
    }
    async updateCarPrice(id, price) {
        await this.getCarById(id);
        await this.carRepository.save({
            id,
            price,
        });
        return this.getCarById(id);
    }
    async updateCarAvailability(id, isAvailable) {
        await this.getCarById(id);
        await this.carRepository.save({
            id,
            isAvailable,
        });
        return this.getCarById(id);
    }
    async deleteCar(id) {
        return await this.carRepository.softDelete(id);
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CAR_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map