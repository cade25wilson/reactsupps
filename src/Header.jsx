import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <header>
            <div className="text-center">
                {/* <a href="/" className="text-decoration-none text-black">
                    <h1 className="p-5">Discount Supplements</h1>
                </a> */}
                <Link to="/" className="text-decoration-none text-black">
                    <h1 className="p-5">Discount Supplements</h1>
                </Link>
            </div>
        </header>
        </>
    )
}