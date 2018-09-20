const TODOItem = ({
    id,
    name,
    onRemoveItem
    }
) => {

    return (
        <div className="item-row">
            <label className="check-flag">
            <span className="check-flag-label">{ name }</span>
            <span className="checkbox">
                <input className="checkbox-native" type="checkbox" onChange={onRemoveItem.bind(this, id)}/>
                <span className="checkmark">
                <svg viewBox="0 0 24 24">
                    <path className="checkmark-icon" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                </svg>
                </span>
            </span>
            </label>
        </div>
    )
};

export default TODOItem;

