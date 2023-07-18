import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
    const [amount, setAmount] = useState(0);
    return (
        <div className="xl:mx-32 h-screen">
            <Navbar amount={amount} setAmount={setAmount} />
            <Product setAmount={setAmount} />
        </div>
    );
}

export default App;
