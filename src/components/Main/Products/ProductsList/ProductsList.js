import { ProductsItem } from "../ProductsItem/ProductsItem"
import { Sorting } from "../Sorting/Sorting"

export const ProductsList = () => {
    return (
        <div style={{ flex: '4' }}>
            <Sorting />
            <ProductsItem />
        </div>
    )
}