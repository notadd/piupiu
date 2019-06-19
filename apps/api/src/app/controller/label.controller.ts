import { Controller, Inject, Get, Param, Delete } from '@nestjs/common';
import { LabelService } from '../services/label.service';
import { Label } from '@magnus/db';

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
    async findAllLabel(): Promise<Label> {
        return await this.labelService.findLabel();
    }
    @Delete(':label_id')
    async deleteLabel(@Param('label_id') body:{label_id:number}):Promise<any>{
        return await this.labelService.deleteLabel(body);
    }
}