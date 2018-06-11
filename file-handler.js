export default class FileHandler {

    constructor() {
    }

    uploadFile(filePath) {
        return `${__dirname}/${filePath}`
    }
}