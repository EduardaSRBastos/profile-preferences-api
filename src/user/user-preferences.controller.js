"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferencesController = void 0;
const common_1 = require("@nestjs/common");
const admin = __importStar(require("firebase-admin"));
const user_preferences_model_1 = require("../user/user-preferences.model");
const swagger_1 = require("@nestjs/swagger");
const logger_1 = require("../logger");
/* The UserPreferencesController class is a controller that handles the creation of user
preferences and saves them to a Firestore database. */
let UserPreferencesController = class UserPreferencesController {
    async createUserPreferences(userPreferences) {
        try {
            // Log the incoming request
            logger_1.logger.log(`Received request to create user preferences for userID: ${userPreferences.userID}`);
            const firestore = admin.firestore();
            const preferencesCollection = firestore.collection('userPreferences');
            // Check if a document with the same user ID already exists
            const existingDoc = await preferencesCollection.doc(userPreferences.userID).get();
            if (existingDoc.exists) {
                // Log the conflict error
                logger_1.logger.warn('Duplicate request. User preferences already exist.');
                throw new common_1.ConflictException('Duplicate request. User preferences already exist.');
            }
            // Save the data to Firestore
            await preferencesCollection.doc(userPreferences.userID).set(userPreferences);
            // Log the successful creation
            logger_1.logger.log(`User preferences created for userID: ${userPreferences.userID}`);
            // Return the created resource in the response body
            return { resource: userPreferences };
        }
        catch (error) {
            // Log any errors that occur during the process
            logger_1.logger.error(`Error creating user preferences: ${error.message}`, error.stack);
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create User Preferences' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_preferences_model_1.UserPreferences]),
    __metadata("design:returntype", Promise)
], UserPreferencesController.prototype, "createUserPreferences", null);
UserPreferencesController = __decorate([
    (0, swagger_1.ApiTags)('User Preferences'),
    (0, common_1.Controller)('v1/user/preferences')
], UserPreferencesController);
exports.UserPreferencesController = UserPreferencesController;
