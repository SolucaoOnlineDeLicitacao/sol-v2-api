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
exports.ItemsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../../shared/guards/jwt-auth.guard");
const items_service_1 = require("../services/items.service");
const items_model_1 = require("../models/database/items.model");
const error_manager_1 = require("../../../shared/utils/error.manager");
let ItemsController = class ItemsController {
    constructor(itemsService, itemsModel) {
        this.itemsService = itemsService;
        this.itemsModel = itemsModel;
    }
    async list() {
        try {
            const res = await this.itemsModel.list();
            return res;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createError(error);
        }
    }
    async register(dto) {
        try {
            await this.itemsModel.verifyCodeExists(dto.code);
            await this.itemsModel.saveItem(dto);
            return { type: "success" };
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createError(error);
        }
    }
    async deleteById(_id) {
        try {
            await this.itemsModel.deleteById(_id);
            return { type: "success" };
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createError(error);
        }
    }
    async update(id, dto) {
        try {
            await this.itemsModel.updateItem(id, dto);
            return { type: "success" };
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createError(error);
        }
    }
    async getById(_id) {
        try {
            return await this.itemsModel.getById(_id);
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createError(error);
        }
    }
};
__decorate([
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)("register"),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "register", null);
__decorate([
    (0, common_1.Delete)('delete-by-id/:_id'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "deleteById", null);
__decorate([
    (0, common_1.Put)("update/:id"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("get-by-id/:_id"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "getById", null);
ItemsController = __decorate([
    (0, swagger_1.ApiTags)('items'),
    (0, common_1.Controller)('items'),
    __metadata("design:paramtypes", [items_service_1.ItemsService,
        items_model_1.ItemsModel])
], ItemsController);
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map