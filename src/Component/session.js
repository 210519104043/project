import Header from "./header"
import Footer from "./footer"
import Product from "./product"
import { Outlet } from "react-router-dom"

function Session() {
    return (
        <>
            <Header />
            <section>
                <Outlet />
            </section>
            <Footer />
        </>
    )
}
export default Session