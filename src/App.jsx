import React from 'react'
import SignUpForm from "./Components/SignUpForm/SignUpForm"
import ValidationTest from "./Components/ValidationTest/ValidationTest"
import SortTable from "./Components/SortTable/SortTable"
import Search from "./Components/Search/Search"

const App = () => {
    return (
        <div>
            <ValidationTest/>
            <SignUpForm/>
            <SortTable/>
        </div>
    )
}

export default App
