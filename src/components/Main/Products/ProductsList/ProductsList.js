import { ProductsItem } from "../ProductsItem/ProductsItem"
import { Sorting } from "../Sorting/Sorting"

export const ProductsList = () => {
    return (
        <div style={{ flex: '85' }}>
            <Sorting />
            <ProductsItem />
        </div>
    )
}