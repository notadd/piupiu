import { Controller, Inject, Get, Param } from '@nestjs/common';
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
}