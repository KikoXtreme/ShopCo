import "../../../../css/sorting.css";

export const Sorting = ({ sortBy, sortOrder, onSortChange }) => {
    return (
        <div className="sorting-container">
            <label htmlFor="sort-by">Sort by:</label>
            <select id="sort-by" value={sortBy} onChange={onSortChange}>
                <option value="price">Price</option>
                <option value="title">Title</option>
                <option value="rating">Rating</option>
            </select>
            <label htmlFor="sort-order">Sort order:</label>
            <select id="sort-order" value={sortOrder} onChange={onSortChange}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
};