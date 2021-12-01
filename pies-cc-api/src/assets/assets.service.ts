import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as crypto from "crypto"
import * as path from "path"
import * as fs from "fs"
import { Asset, AssetDocument } from "./assets.model";
import { generate } from "rxjs";

@Injectable()
export class AssetsService {
    constructor(@InjectModel(Asset.name) private assetModel: Model<AssetDocument>) {}

    private generateRandomString = (length: number) => crypto.randomBytes(length).toString("hex")
    private fileStorageFolder = "/assets/" // Make sure to put a / at the end

    async createAsset(file: any): Promise<Asset> {
        const originalFileName = file.name
        const fileExtension = path.extname(originalFileName).substr(1, 2^64)
        const id = this.generateRandomString(16)
        const date = Date.now()
        const assetPath = this.fileStorageFolder + id + "." + fileExtension

        //  Write the file

        file.mv(assetPath)

        // Create a new database record

        const createdAsset = new this.assetModel({
            id: id,
            originalFileName: originalFileName,
            fileExtension: fileExtension,
            mimeType: file.mimetype,
            assetPath: assetPath,
            date: date
        })

        // Return the newly created asset

        await createdAsset.save()
        return createdAsset
    }

    async readAssetFile(id: string): Promise<any> {
        const data = await this.assetModel.findOne({id: id}).exec()
        if (data) {
            return data
        }
    }

}