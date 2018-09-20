const Header = ({
    randomQuote,
    date,
    onOpenModal
}) => {
    return (
        <header className="header">
            <div className="wrap">
                <span className="btn-icon">
                <img onClick={onOpenModal} className="icon icon-plus js-modal-init" src="icons/icon-plus.svg" alt="Add New Item" />
                </span>
                <div className="header-blockquote">
                <h1 className="header-quote">{ randomQuote.quote }</h1>
                <div className="header-cite">- { randomQuote.author }</div>
                </div>
            </div>
            <div className="header-inner">
                <div className="wrap">
                <img className="logo" src="images/vegait-logo.svg" alt="VegaIT" />
                <div className="date-wrap">
                    <img className="icon" src="icons/icon-calendar.svg" alt="Calendar" />
                    <time> {date.toLocaleDateString()}</time>
                </div>
                </div>
            </div>
        </header>
    )
};

export default Header;