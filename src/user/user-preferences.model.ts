import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UserPreferences {
  userID: string;

  @IsNotEmpty()
  @IsBoolean()
  termsAndConditionAccepted: boolean;

  @IsNotEmpty()
  @IsString()
  languagePreferences: string;

  @IsNotEmpty()
  @IsBoolean()
  showProfilePreferences: boolean;

  @IsNotEmpty()
  @IsBoolean()
  showLanguagesPreferences: boolean;
}
