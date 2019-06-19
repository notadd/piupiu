import { Injectable } from '@nestjs/common';
import { MagnusClient, gql } from '@notadd/magnus-client';
import { Label } from '@magnus/db';
import { DeleteResult } from 'typeorm';

@Injectable()
export class LabelService {
    constructor(
        public readonly client: MagnusClient,
    ) { }

    /**
     * 检查数组中的标记在是否已存在,如存在就关联不再添加
     * @param labels 
     */
    async inspectLabel(labels: Label[]): Promise<Label[]> {
        for (let i = 0; i < labels.length; i++) {
            const res = await this.findLabelByName(labels[i].name);
            if (res) {
                labels[i] = res;
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
        if (result.data.labelFindOne) {
            const label = new Label();
            label.label_id = result.data.labelFindOne.label_id;
            label.name = result.data.labelFindOne.name;
            return label;
        }
        return null;
    }

    /**
     * 
     * @param label 根据条件查询批量标签
     */
    async findLabel(): Promise<Label> {
        const result = await this.client.query({
            query: gql`
            query LabelFInd($options:LabelFindManyOptions!){
                labelFind(options:$options){
                data{
                    label_id, name, create_time,update_time
                }
            }}
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
    async deleteLabel(where: Partial<Label>): Promise<DeleteResult> {
        return await this.client.mutate({
            mutation: gql`
            mutation LabelDelete($where:LabelFindConditions!){
                labelDelete(where:$where){
                    affected
                }
            }
            `,
            variables:{
                "where":{
                    "label_id":where.label_id
                }
            }
        })
    }

}