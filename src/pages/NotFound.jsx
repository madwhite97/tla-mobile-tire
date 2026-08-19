import logo from "../assets/tla-logo.svg";

export default function NotFound() {
    return (
        <div className="not-found-page">
            <img
                src={logo}
                alt="TLA Mobile Tire Service"
                className="not-found-logo"
            />

            <p className="not-found-code">404</p>

            <h1>Looks Like You Took a Wrong Turn</h1>
            
            <p>
                The page you're looking for doesn't exist or may have been moved.
            </p>

            <div className="not-found-actions">
                <a href="/" className="not-found-button">
                    Back to Home 
                </a>

                <a href="tel:8164910455" className="not-found-button secondary">
                    Call 816-491-0455
                </a>
            </div>
        </div>
    );
}