"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const task_controller_1 = require("./task.controller");
const task_service_1 = require("./task.service");
const mongoose_1 = require("@nestjs/mongoose");
const task_schema_1 = require("../schemas/task.schema");
let TaskModule = class TaskModule {
};
exports.TaskModule = TaskModule;
exports.TaskModule = TaskModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ schema: task_schema_1.TaskSchema, name: task_schema_1.Task.name }])],
        controllers: [task_controller_1.TaskController],
        providers: [task_service_1.TaskService],
        exports: [],
    })
], TaskModule);
//# sourceMappingURL=task.module.js.map