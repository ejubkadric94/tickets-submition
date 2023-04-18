type Props = {
    isDisabled: boolean;
}

const Submit = ({ isDisabled }: Props) => {
    return (
        <div className="button-container">
            <button disabled={isDisabled}>Submit</button>
        </div>
    )
};

export default Submit;
