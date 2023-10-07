import { FaSistrix } from "react-icons/fa";

export const Filter = ({ filter, onChangeFilter }) => {
    return (<div>
        <label>
            Find contact by name 
            <FaSistrix/>
            <input 
                type="text"
                name="name"
                placeholder="search"
                defaultValue={filter}
                onChange={evt => {
                    onChangeFilter(evt.target.value)
                }}
                />
        </label>
        
    </div>
    )
}
// export const Filter = ({filter, onChahgeFilter}) => {
//     return <div>
//         <label>
//             Find contact by name
//             <input
//                 type="text"
//                 value={filter}
//                 onChahge={evt => onChahgeFilter('filter', evt.target.value)}>
                
//             </input>
//         </label>
//     </div>
// }