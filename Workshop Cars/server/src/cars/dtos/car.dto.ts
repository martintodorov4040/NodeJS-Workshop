import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Car } from "../interface/car.interface";

export class CarCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "brand car",
    example: "Volvo",
  })
  brand: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "model car",
    example: "xc90",
  })
  model: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
    description: "year car",
    example: 2011,
  })
  year: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
    description: "car price",
    example: 18000,
  })
  price: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "color car",
    example: "Black",
  })
  color: string;
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    type: Boolean,
    required: true,
    description: " availability car",
    example: true,
  })
  isAvailable: boolean;
}

export class CarResponseDto extends CarCreateDto implements Car {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The ID of the Car",
    example: "fgjfjghk",
  })
  id: string;

  @ApiPropertyOptional({
    type: Date,
    required: false,
    description: "Date and time when car has been deleted",
    example: "2023-05-02T18:24:24.713Z",
  })
  deletedAt?: Date;
}

export class CarUpdateDto extends CarCreateDto {}
