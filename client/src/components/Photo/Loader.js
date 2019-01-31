import React from "react"
import Dropzone from "react-dropzone"
import axios from "axios"

class Loader extends React.Component {



  onDrop = (acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles)
    let uid = window.localStorage.getItem("uid")
    const image = new FormData();
    image.append("image", acceptedFiles[0]);
    axios.post(`/api/photos/upload/${uid}`, image).then(res =>
      console.log(res))
  }

  render() {

    return (
      <Dropzone multiple={false} accept="image/*" onDrop={this.onDrop}>

        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <button>Add image</button>
          </div>
        )}
      </Dropzone>
    );

  }
}


export default Loader