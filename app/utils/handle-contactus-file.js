import fs from "fs";
import path from "path";

export const handleFileUpload = async (file) => {
  if (!file) return null;

  const timestamp = Date.now();
  const fileExtension = path.extname(file.name);
  const uniqueFileName = `${timestamp}${fileExtension}`;

  const uploadPath = path.join(
    process.cwd(),
    "public",
    "uploads",
    uniqueFileName
  );

  if (!fs.existsSync(path.dirname(uploadPath))) {
    fs.mkdirSync(path.dirname(uploadPath), { recursive: true });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(uploadPath, buffer);

  const fileUrl = `${process.env.NEXT_PUBLIC_REQUESTED_URL}uploads/${uniqueFileName}`;

  return fileUrl;
};
