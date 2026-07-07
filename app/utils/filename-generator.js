export const generateFileName = (originalName, timestamp, suffix = "") => {
    try {
        const fileExtension = originalName.split(".").pop();
        const baseName = originalName.replace(`.${fileExtension}`, "");
        const fileName = suffix
            ? `${baseName}-${timestamp}-${suffix}.${fileExtension}`
            : `${baseName}-${timestamp}.${fileExtension}`;
        return fileName;
    } catch (error) {
        throw new Error(`Error generating file name: ${error.message}`);
    }
};