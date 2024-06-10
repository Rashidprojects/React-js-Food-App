import img3 from '../images/img3.jpg'
import { MdHotelClass } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoFastFoodSharp } from "react-icons/io5";

function Hero() {
    return(
        <div>
            <div className="hero-container">
                {/* <img src="https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_1280.jpg" alt="" />  */}
                <img src={img3} alt="" />
                <div className="text-content">
                    <p>Welcome to Our Store</p>
                    <h1>Its all about good food & taste</h1>
                    <button>view more</button>
                    <div className='overview-container'>
                        <div><MdHotelClass /> <p>10k Reviews</p> <p>(4.8)</p></div>
                        <div><TbToolsKitchen2 /> <p>1000+</p> <p>Restuarents</p></div>
                        <div><IoFastFoodSharp /> <p>100+</p> <p>Food Items</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero