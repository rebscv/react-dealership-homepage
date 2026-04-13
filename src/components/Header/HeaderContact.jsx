function HeaderContact() {
    return (
        <div className="header-contact">

            <div className="header-contact-row">
                <svg className="icon-phone-outline"><use href="/icons.svg#icon-phone-outline"></use></svg>
                <span> (03) 9900 9000</span>
            </div>
            
            <div className="header-contact-row">
                <svg className="icon-location"><use href="/icons.svg#icon-location"></use></svg>
                <span> Melbourne, VIC</span>
            </div>
            

        </div>
    );
}

export default HeaderContact;