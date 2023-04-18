import { useState } from "react";
import { Item } from "../typescript/types";
import OfficeDropdown from "./OfficeDropdown";
import IssueTypeDropdown from "./IssueTypeDropdown";
import "./Form.css"
import TicketDescription from "./TicketDescription";
import Submit from "./Submit";

const DATABASE_ITEMS: Item[] = [
    {
        id: 2,
        office: "APAC",
        issueTypes: [
            { id: 1, descriptionTemplate: '', maxLength: 255, label: "APAC" }, { id: 10, descriptionTemplate: '', maxLength: 255, label: "Laptop issue" }, { id: 11, descriptionTemplate: '', maxLength: 255, label: "Teams access" }
        ]
    },
    {
        id: 1,
        office: "EMEA",
        issueTypes: [
            { id: 2, descriptionTemplate: '', maxLength: 255, label: "EMEA" }, { id: 9, descriptionTemplate: '', maxLength: 255, label: "Laptop issue" }, { id: 12, descriptionTemplate: '', maxLength: 255, label: "Teams access" }
        ]
    },
    {
        id: 3,
        office: "London HR",
        issueTypes: [
            { id: 3, descriptionTemplate: '', maxLength: 255, label: "London HR" }, { id: 8, descriptionTemplate: '', maxLength: 255, label: "Laptop issue" }, { id: 13, descriptionTemplate: '', maxLength: 255, label: "Teams access" }
        ]
    },
    {
        id: 4,
        office: "London IT",
        issueTypes: [
            { id: 4, descriptionTemplate: '', maxLength: 255, label: "London IT" }, { id: 7, descriptionTemplate: '', maxLength: 255, label: "Laptop issue" }, { id: 14, descriptionTemplate: '', maxLength: 255, label: "Teams access" }
        ]
    },
    {
        id: 5,
        office: "Global IT",
        issueTypes: [
            { id: 5, descriptionTemplate: '', maxLength: 255, label: "Global IT" }, { id: 6, descriptionTemplate: 'Laptop model: \nLaptop serial number: \nIssue description:', maxLength: 255, label: "Laptop issue" }, { id: 15, descriptionTemplate: '', maxLength: 255, label: "Teams access" }
        ]
    },

]


const Form = () => {
    const [description, setDescription] = useState<string>('');
    const [selectedOfficeId, setSelectedOfficeId] = useState<number>();
    const [selectedIssueTypeId, setSelectedIssueTypeId] = useState<number>();

    const selectedIssueTypes = DATABASE_ITEMS.find(el => el.id === selectedOfficeId)?.issueTypes;
    const selectedIssueType = selectedIssueTypes?.find(el => el.id === selectedIssueTypeId);
    const selectedDescription = selectedIssueType?.descriptionTemplate;

    const disableSubmit = !selectedOfficeId || !selectedIssueTypeId || !description.length;
    return (
        <div className="form">
            <OfficeDropdown
                items={DATABASE_ITEMS}
                selectedOfficeId={selectedOfficeId}
                setSelectedOfficeId={setSelectedOfficeId}
            />
            <IssueTypeDropdown
                isDisabled={!selectedOfficeId}
                issueTypes={selectedIssueTypes}
                selectedIssueTypeId={selectedIssueTypeId}
                setSelectedIssueTypeId={setSelectedIssueTypeId}
            />
            <TicketDescription
                descriptionTemplate={selectedDescription}
                value={description}
                setDescription={setDescription}
                showAdditionalInstructions={!!selectedDescription && !!selectedDescription.length}
                maxCharacters={selectedIssueType?.maxLength}
                isDisabled={!selectedIssueTypeId}
            />
            <Submit
                isDisabled={disableSubmit}
            />
        </div>
    );
};

export default Form;
