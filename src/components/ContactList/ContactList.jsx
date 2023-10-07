import { FaTrashAlt } from "react-icons/fa";
export const ContactList = ({ contacts, onDelete }) => {
    
    return <div>
        {contacts.map(({id, name, number}) => (
            <ul key={id}>
                <li><p>{name}: {number}</p>
                    <button type="button" onClick={() => onDelete(id)}><FaTrashAlt/></button>
                </li>
            </ul>))}
    </div>
}