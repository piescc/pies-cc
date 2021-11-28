import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Request } from "express"

export type AssetDocument = Asset & Document;

@Schema()
export class Asset {
  @Prop({required: true})
  id: string

  @Prop({required: true})
  originalFileName: string

  @Prop({required: true})
  fileExtension: string

  @Prop({required: true})
  mimeType: string

  @Prop({required: true})
  assetPath: string

  @Prop({required: true})
  date: number
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
