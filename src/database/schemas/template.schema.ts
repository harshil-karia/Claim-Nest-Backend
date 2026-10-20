import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TemplateDocument = HydratedDocument<Template>;

@Schema({
  collection: 'templates',
  timestamps: true,
})
export class Template {
  @Prop({
    required: true,
    unique: true,
    trim: true,
    uppercase: true,
  })
  code: string;

  @Prop({
    required: true,
    trim: true,
  })
  name: string;

  @Prop({
    required: false,
    trim: true,
  })
  description?: string;

  @Prop({
    required: true,
    trim: true,
  })
  category: string;

  @Prop({
    required: true,
    default: 1,
  })
  pageCount: number;

  @Prop({
    required: true,
    default: 'A4',
    trim: true,
  })
  pageSize: string;

  @Prop({
    required: true,
  })
  htmlContent: string;

  @Prop({
    required: true,
    default: true,
  })
  isActive: boolean;
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
