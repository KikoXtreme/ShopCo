import { LeftNav } from "./LeftNav/LeftNav"
import { ProductsList } from "./ProductsList/ProductsList"

export const Products = () => {
    return (
        <div style={{ display: 'flex' }}>
            <LeftNav style={{ flex: '1' }} />
            <ProductsList style={{ flex: '4' }} />
        </div>
    )
}