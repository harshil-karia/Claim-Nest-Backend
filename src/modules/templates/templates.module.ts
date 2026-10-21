import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Template,
  TemplateSchema,
} from '../../database/schemas/template.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Template.name,
        schema: TemplateSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class TemplatesModule {}
