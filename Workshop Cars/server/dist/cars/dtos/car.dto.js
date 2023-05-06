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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarUpdateDto = exports.CarResponseDto = exports.CarCreateDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CarCreateDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: "The brand of the car",
        example: "BMW",
    }),
    __metadata("design:type", String)
], CarCreateDto.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: "The model of the car",
        example: "M5",
    }),
    __metadata("design:type", String)
], CarCreateDto.prototype, "model", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: "The year of the car",
        example: 2010,
    }),
    __metadata("design:type", Number)
], CarCreateDto.prototype, "year", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
        description: "The price of the car",
        example: 6000,
    }),
    __metadata("design:type", Number)
], CarCreateDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: "The color of the car",
        example: "Black",
    }),
    __metadata("design:type", String)
], CarCreateDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Boolean,
        required: true,
        description: "The availability of the car",
        example: true,
    }),
    __metadata("design:type", Boolean)
], CarCreateDto.prototype, "isAvailable", void 0);
exports.CarCreateDto = CarCreateDto;
class CarResponseDto extends CarCreateDto {
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: "The ID of the Car",
        example: "iFSAjofas",
    }),
    __metadata("design:type", String)
], CarResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: Date,
        required: false,
        description: "Date and time when car has been deleted",
        example: "2023-05-02T18:24:24.713Z",
    }),
    __metadata("design:type", Date)
], CarResponseDto.prototype, "deletedAt", void 0);
exports.CarResponseDto = CarResponseDto;
class CarUpdateDto extends CarCreateDto {
}
exports.CarUpdateDto = CarUpdateDto;
//# sourceMappingURL=car.dto.js.map