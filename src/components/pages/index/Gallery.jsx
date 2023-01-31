import React from 'react'
import ImageGallery from 'react-image-gallery';

export default function Gallery() {

    const images = [
        "https://dbcsx3kp2k1lc.cloudfront.net/files/69/69f246b7-a6d9-4ec7-92f4-56c0b9b7b472.webp?v=20221013023650",
        "https://dbcsx3kp2k1lc.cloudfront.net/files/c7/c716db26-77fc-40b3-be95-4f986b602bf3.webp?v=20221008190216",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mining_Bar.jpg/1200px-Mining_Bar.jpg",
        "https://dbcsx3kp2k1lc.cloudfront.net/files/69/69f246b7-a6d9-4ec7-92f4-56c0b9b7b472.webp?v=20221013023650",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mining_Bar.jpg/1200px-Mining_Bar.jpg",
        "https://dbcsx3kp2k1lc.cloudfront.net/files/c7/c716db26-77fc-40b3-be95-4f986b602bf3.webp?v=20221008190216",
    ]

  return (

    <div className="row">
        {images.map((image, index) => {
            return (
                <div key={index} className='d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-12 my-3'>
                    <img src={image} onClick={() => {imageClickedHandler(image)}} alt="image" className='img-fluid' style={{width: '300px', height: '300px'}}/>
                </div>
            )
        })
        }
        <div className="m-auto">
            <a href="./">Chci vidět více</a>
        </div>
    </div>

  )
}
