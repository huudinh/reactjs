import { useState } from 'react';
import './ProductPhoto.css';

const data = [
    "https://huudinh.github.io/examples/app_slide/images/1.jpg",
    "https://huudinh.github.io/examples/app_slide/images/2.jpg",
    "https://huudinh.github.io/examples/app_slide/images/3.jpg",
    "https://huudinh.github.io/examples/app_slide/images/4.jpg"
];

const ProductPhoto = () => {
    const [photo, setPhoto] = useState(data[0]);
    const [active, setActive] = useState(0);

    const handleChangePhoto = (index) => {
        setPhoto(data[index]);
        setActive(index);
    }
    return (
        <div className="ProducPhoto">
            <div className="ProducPhoto__thumb">
               {
                 data.map((item, index) => {
                    return (
                        <img 
                            key={index} 
                            src={item} 
                            onClick={() => handleChangePhoto(index)} 
                            className={active != index ? undefined : 'active'} 
                        />
                    )
                })
               }
            </div>
            <div className="ProducPhoto__photo">
                <img src={photo} />
            </div>
        </div>
    )
}

export default ProductPhoto;