import React from "react";
import ImageUploading from "react-images-uploading";
import "./SellItem.scss";
function UploadPicture(props) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 15;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    props.setUploadImages(imageList);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            <div
              className="Vazaar-Upload-Image-Button"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <div className="Vazaar-Plus-Button">
                <div style={{ position: "relative", bottom: "6px" }}>+</div>
              </div>
            </div>
            {/* Click or Drop here
              </button> */}
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div
                key={index}
                className="Vazaar-Image"
                style={{ display: "inline-block" }}
              >
                <img src={image["data_url"]} alt="" width="130" height="130" />
                <div
                  style={{
                    position: "relative",
                    width: "fit-content",
                    bottom: "110%",
                    left: "120px",
                  }}
                >
                  {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => onImageRemove(index)}
                  >
                    x
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
export default UploadPicture;
