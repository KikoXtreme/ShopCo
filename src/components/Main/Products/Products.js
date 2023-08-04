import { LeftNav } from "./LeftNav/LeftNav"
import { ProductsList } from "./ProductsList/ProductsList"

export const Products = () => {
    return (
        <div style={{ display: 'flex' }}>
            <LeftNav style={{ flex: '15' }} />
            <ProductsList style={{ flex: '85' }} />
        </div>
    )
}