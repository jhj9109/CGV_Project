import fs from 'fs';

export const loadJsonFile = (filePath: string) => {
    try {
        const jsonString = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error reading the file:', error);
        return null;
    }
}