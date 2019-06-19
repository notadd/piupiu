import { MagnusServerModule as NotaddMagnus } from '@notadd/magnus';
import entities from '../../../../../libs/db';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        NotaddMagnus.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'magnus',
            password: 'magnus',
            database: 'magnus',
            synchronize: true,
            entities: entities,
            logging: true
        })
    ]
})
export class MagnusServerModule { } 