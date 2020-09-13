import { AppModule } from './app/app.module';
import qpress, { QExpress, LogLevelType } from '@qpress/core';
import 'reflect-metadata';

var app: QExpress = qpress({
    JsonParser: true,
    LogLevel: LogLevelType.Verbose
});

app.attachModule(AppModule);

app.runApp();