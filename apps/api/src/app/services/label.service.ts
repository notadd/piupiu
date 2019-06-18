import { Injectable } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client';
import { Label } from '@magnus/db';

@Injectable()
export class LabelService {
    constructor(
        public readonly client: MagnusClient,
    ) { }

    /**
     * 根据名字查询标签
     * @param labelName 标签名字
     */
    async findLabelByName(labelName: string): Promise<Label> {
        const result = await this.client.query({
            query: gql`
            query findLabelByName($options: LabelFindOneOptions!){
                labelFindOne(options: $options){
                    label_id,
                    name
                }
            }
            `,
            variables: {
                "options": {
                    "where": {
                        "name": labelName
                    }
                }
            }
        })
        debugger
        return result.data.labelFindOne;
    }
    /**
     * 
     * @param label 查询所有标签
     */
    async LabelFind(label: Label): Promise<Label> {
        const result = await this.client.query({
            query: gql`
              query LabelFInd($options:LabelFindManyOptions!){
                labelFind(options:$options){
                data{
                label_id,
                name,
                create_time,
                update_time
                }
            }
            }
            `,
            variables: {
                "options": {
                    
                }
            }
        })
        return result.data;
    }

}