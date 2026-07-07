require('dotenv').config();

const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs-extra');
const path = require('path');

const s3 = new S3Client({
	region: process.env.AWS_S3_REGION
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;

const uploadToS3 = async (filePath, s3Path) => {
	try {
		const fileContent = await fs.readFile(filePath);

		// Map file extensions to MIME types
		const mimeTypes = {
			'.woff': 'font/woff',
			'.woff2': 'font/woff2',
			'.svg': 'image/svg+xml',
			'.webp': 'image/webp',
			'.mp4': 'video/mp4',
			'.json': 'application/json',
		};

		const contentType = mimeTypes[path.extname(filePath)] || 'application/octet-stream';

		console.log('contentType: ', contentType);
		const params = {
			Bucket: BUCKET_NAME,
			Key: s3Path,
			Body: fileContent,
			ContentType: contentType
		};

		const command = new PutObjectCommand(params);
		await s3.send(command);
		console.log(`Successfully uploaded: ${s3Path}`);
	} catch (error) {
		console.error('Error uploading to S3:', error.message);
	}
};

const processAndUploadFiles = async (localDir) => {
	try {
		// Get all files from the directory
		const files = await fs.readdir(localDir);
		for (const file of files) {
			const filePath = path.join(localDir, file);
			const s3Path = `${directoryName}/${path.basename(file).toLowerCase()}`; // Define S3 path for given directory
			console.log('filePath: ', filePath);
			console.log('s3Path: ', s3Path);

			await uploadToS3(filePath, s3Path);
		}
	} catch (error) {
		console.error('Error processing files:', error.message);
	}
};

// Main execution
const directoryName = 'fonts'; // Replace with desired directory name (images, videos, animations, fonts, etc.)
const localDir = path.resolve(`./assets/${directoryName}`);
console.log(`Processing files in directory: ${localDir}`);
processAndUploadFiles(localDir).catch((err) => {
	console.error('Unhandled error:', err.message);
});
