import React from "react"
import Dropzone from "react-dropzone"
import axios from "axios"

class Loader extends React.Component {



  onDrop = (acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles)
    let id = window.localStorage.getItem("id")
    const image = new FormData();
    image.append("image", acceptedFiles[0]);
    axios.post(`/api/photos/upload/${id}`, image).then(res =>
      console.log(res))
  }

  render() {

    return (
      <Dropzone multiple={false} accept="image/*" onDrop={this.onDrop}>

        {({ getRootProps, getInputProps }) => (
          <span {...getRootProps()}>
            <input {...getInputProps()} />
            <button>Add image</button>
          </span>
        )}
      </Dropzone>
    );

  }
}


export default Loader