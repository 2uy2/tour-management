
const upload = new FileUploadWithPreview.FileUploadWithPreview("upload-image", {
    multiple: true,
    maxFileCount: 6
});
const image = upload.cacheFileArray||[]
