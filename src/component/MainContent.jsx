import ImageGallery from "./ImageGallery"
import ProductDetails from "./ProductDetails"

const MainContent = () => {


    
 
    return(
        <main className="flex flex-col lg:flex-row items- center ">
            <ImageGallery/>
            <ProductDetails/>
        </main>
          )
}

export default MainContent

