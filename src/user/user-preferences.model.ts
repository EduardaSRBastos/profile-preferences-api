import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/* The UserPreferences class represents the account preferences of a user, including their ID, acceptance
of terms and conditions, language preferences, and preferences for showing profile and language
information, with validation of the input. */
export class UserPreferences {
  @ApiProperty()
  @IsNotEmpty()
  userID?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  termsAndConditionAccepted?: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  languagePreferences?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  showProfilePreferences?: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  showLanguagesPreferences?: boolean;
}
