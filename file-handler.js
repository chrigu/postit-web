export default class FileHandler {

    constructor() {
    }

    uploadFile(filePath) {
        // return `${__dirname}/${filePath}`
        return `http://localhost:4000/${filePath.split('uploads/')[1]}`
    }
}