
export const ContactList = ({ contacts}) => {
    return <div>
        {contacts.map(contact => (
            <ul key={contact.id}>
                <li><p>{contact.name}: {contact.number}</p>
                </li>
            </ul>))}
    </div>
}