import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../config/aws";
import mime from "mime-types";
import { awsS3BucketName } from "@/config";

async function uploadFileToS3(file, fileName) {
    try {
        const fileBuffer = file;
        const contentType = mime.lookup(fileName) || "application/octet-stream";

        const params = {
            Bucket: awsS3BucketName,
            Key: fileName,
            Body: fileBuffer,
            ContentType: contentType,
        };

        const command = new PutObjectCommand(params);
        await s3Client.send(command);
        return fileName;
    } catch (e) {
        return null;
    }
}

export default uploadFileToS3;
