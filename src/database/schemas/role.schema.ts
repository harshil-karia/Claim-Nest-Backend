import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema({
  collection: 'roles',
  timestamps: true,
})
export class Role {
  @Prop({
    required: true,
    unique: true,
    trim: true,
  })
  name: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);