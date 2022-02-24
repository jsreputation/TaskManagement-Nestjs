import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
