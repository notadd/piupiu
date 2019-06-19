import { Label } from '@magnus/db';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { LabelService } from '../services/label.service';
@Controller('label')
export class LabelController {
    constructor(
        @Inject(LabelService) public readonly labelService: LabelService,
    ) { }

    @Get(":name")
    async findLabelByName(@Param('name') name: string): Promise<Label> {
        const result = await this.labelService.findLabelByName(name);
        return result;
    }

    @Get()
    async findAllLabel(): Promise<Label[]> {
        return await this.labelService.findLabel();
    }

    // 根据id查询标签及其所有笔记
    @Post('find')
    async findLabel(@Body() body: { label_id: number }): Promise<Label> {
        return await this.labelService.findLabelById(body);
    }
}