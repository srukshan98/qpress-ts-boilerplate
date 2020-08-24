import { BlogModule } from './blog/blog.module';
import { Module, MiddlewareBuilder } from '@qpress/core';

@Module({
    imports: [
        BlogModule,
    ],
    middlewares: [
        MiddlewareBuilder.build((req, res, next) => {
            console.log(new Date());
            next();
        }),
    ],
})
export class AppModule {
}
