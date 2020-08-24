import { BlogController } from './blog.controller';
import { Module } from "@qpress/core";

@Module({
    controllers: [
        BlogController
    ]
})
export class BlogModule {
}