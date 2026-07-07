import { S3Client } from "@aws-sdk/client-s3";
import { awsAccessKeyId, awsSecretAccessKey, awsS3Region } from "@/config";

const s3Client = new S3Client({
    region: awsS3Region,
    credentials: {
        accessKeyId: awsAccessKeyId,
        secretAccessKey: awsSecretAccessKey,
    },
});

export default s3Client;
