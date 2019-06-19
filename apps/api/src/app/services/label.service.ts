import { Injectable } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client';
import { Label } from '@magnus/db';

@Injectable()
export class LabelService {
    constructor(
        public readonly client: MagnusClient,
    ) { }

    /**
     * 检查数组中的标记在是否已经存在,如果存在就从数组中移除
     * @param labels 
     */
    async inspectLabel(labels: Label[]): Promise<Label[]> {
        for (let i = 0; i < labels.length; i++) {
            const res = await this.findLabelByName(labels[i].name);
            if (res) {
                labels.splice(i);
            }
        }
        return labels;
    }

    /**
     * 根据名字查询标签
     * @param labelName 标签名字
     */
    async findLabelByName(labelName: string): Promise<Label> {
        const result = await this.client.query({
            query: gql`
            query labelFindOne($options: LabelFindOneOptions!){
                labelFindOne(options: $options){
                    label_id, name
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
        return result.data.labelFindOne;
    }

    /**
     * 
     * @param label 查询所有标签
     */
    async labelFind(label: Label): Promise<Label> {
        const result = await this.client.query({
            query: gql`
              query LabelFInd($options:LabelFindManyOptions!){
                labelFind(options:$options){
                data{
                label_id, name, create_time,update_time
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
    /**
     * 
     * @param where 根据标签id删除
     */
    async labelDelete(where:Partial<Label>):Promise<Label>{
        return await this.client.mutate({
            mutation:gql`
            mutation LabelDelete($where:LabelFindConditions!){
             labelDelete(where:$where){
                 affected
  }
  
}
            `,
        })
    }
}