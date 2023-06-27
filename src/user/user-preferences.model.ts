import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserPreferences {
  @ApiProperty()
  @IsNotEmpty()
  userID: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  termsAndConditionAccepted: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  languagePreferences: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  showProfilePreferences: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  showLanguagesPreferences: boolean;
}
