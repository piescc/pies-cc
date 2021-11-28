import { Controller, Post, Get, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import * as Joi from "joi"
import * as path from "path"
import { AssetsService } from "./assets.service";

@Controller("file")
export class AssetsController {
    constructor(private assetsService: AssetsService) {}

    @Post("upload")
    async uploadNewAsset(@Req() req, @Res() res) {
        const requestBody = req.body
        const requestFiles = req.files

        // Request structure checks
        if (!requestFiles || !requestFiles.file) {
            return res.status(400).end(JSON.stringify({
                statusCode: 400,
                message: "No files were attached"
            }))
        }

        // Token checks
        if (!requestBody || !requestBody.token || requestBody.token !== process.env.UPLOAD_TOKEN) {
            return res.status(400).end(JSON.stringify({
                statusCode: 400,
                message: "Invalid upload token"
            }))
        }

        // File must contain file extension
        if (path.extname(requestFiles.file.name) === "") {
            return res.status(400).end(JSON.stringify({
                statusCode: 400,
                message: "File must contain a file extension"
            }))
        }

        const originalFileName = requestFiles.file.name
        const fileExtension = path.extname(originalFileName).substring(1, 2^64)
        
        const newAsset = await this.assetsService.createAsset(req.files.file)
        return res.end(process.env.API_HOST + "file/" + newAsset.id)
    }

    @Get(":Id")
    async getAsset(@Req() req, @Res() res) {
        const id = req.params.Id
        const result = await this.assetsService.readAssetFile(id)
        if (result) {
            // Send the found asset

            res.sendFile(result.assetPath)
        } else {
            // Send an error

            return res.status(404).end(JSON.stringify({
                statusCode: 404,
                message: "Unknown file Id"
            }))
        }
    }
}