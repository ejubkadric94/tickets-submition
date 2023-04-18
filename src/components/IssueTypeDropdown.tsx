import { IssueType } from "../typescript/types";

type Props = {
    isDisabled: boolean;
    issueTypes?: IssueType[];
    selectedIssueTypeId?: number;
    setSelectedIssueTypeId: (id: number) => void;
}

const IssueTypeDropdown = ({ isDisabled, issueTypes, setSelectedIssueTypeId, selectedIssueTypeId }: Props) => {
    const label = isDisabled ? 'Issue type (Please select the office first):' : 'Issue type:';

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (!event.target.value || !issueTypes) {
            return;
        }

        const selectedItem = issueTypes.find(el => el.id === parseInt(event.target.value, 10));
        if (selectedItem) {
            setSelectedIssueTypeId(selectedItem.id);
        }
    };

    return (
        <div>
            <label >{label}</label>
            <select id="office" disabled={isDisabled} onChange={handleChange} value={selectedIssueTypeId}>
                <option value=""></option>
                {issueTypes && issueTypes.map((item, index) => <option value={item.id} key={index}>{item.label}</option>)}
            </select>
        </div>
    )
};

export default IssueTypeDropdown;
