
export const Filter = ({filter, onChahgeFilter}) => {
    return <div>
        <label>
            Find contact by name
            <input
                type="text"
                value={filter}
                onChahge={evt => onChahgeFilter('filter', evt.target.value)}>
                
            </input>
        </label>
    </div>
}