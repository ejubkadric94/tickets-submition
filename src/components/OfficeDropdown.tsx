import React from "react";
import { Item } from "../typescript/types";

type Props = {
    items: Item[];
    selectedOfficeId?: number;
    setSelectedOfficeId: (itemId: number) => void;
}

const OfficeDropdown = ({ items, selectedOfficeId, setSelectedOfficeId }: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (!event.target.value) {
            return;
        }

        const selectedItem = items.find(el => el.id === parseInt(event.target.value, 10));
        if (selectedItem) {
            setSelectedOfficeId(selectedItem.id);
        }
    };

    return (
        <div>
            <label >Office/department:</label>
            <select id="office" onChange={handleChange} value={selectedOfficeId}>
                <option value=""></option>
                {items.map(item => <option value={item.id} key={item.id}>{item.office}</option>)}
            </select>
        </div>
    )
};

export default OfficeDropdown;
