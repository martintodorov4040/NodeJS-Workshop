import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class carQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: "Volvo",
    description: "Search car",
  })
  brand?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: "Grey",
    description: "Car color",
  })
  color?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    example: 2005,
    description: "Car year",
  })
  year?: number;
}
