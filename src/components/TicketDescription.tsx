type Props = {
    descriptionTemplate?: string;
    value: string;
    setDescription: (value: string) => void;
    showAdditionalInstructions: boolean;
    maxCharacters?: number;
    isDisabled: boolean;
}

const TicketDescription = ({ descriptionTemplate, value, isDisabled, setDescription, showAdditionalInstructions, maxCharacters }: Props) => {
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.currentTarget.value;
        if (newValue.length) {
            setDescription(newValue);
        }
    }

    const additionalInstructions = showAdditionalInstructions ? 'Please provide as many details as per provided template' : '';
    const characterLeft = maxCharacters ? maxCharacters - value.length : 'please choose an issue type first';
    return (
        <div>
            <label>Ticket description: {additionalInstructions}</label>
            <textarea
                disabled={isDisabled}
                value={value.length ? value : descriptionTemplate}
                onChange={onChange}
                rows={5}
                cols={50}
            />
            <p>Characters left: {characterLeft}</p>
        </div>
    );
};

export default TicketDescription;

