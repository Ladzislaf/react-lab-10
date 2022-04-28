import React from 'react'
import HelloWorldComponent from "./HelloWorldComponent"
import '../../App.css'

const ValidationTest = () => {
    const testString = '123'
    const testSymbol = Symbol('123')
    const testArray = [1, 2, 3]
    const testBool = true
    const testFunc = () => alert('function')
    const testNumber = 666
    const testObject = { name: 'Johnny', surname: 'Depp'}

    return (
        <div>
            <HelloWorldComponent
                stringProp={testString}
                symbolProp={testSymbol}
                arrayProp={testArray}
                boolProp={testBool}
                funcProp={testFunc}
                nubmerProp={testNumber}
                objectProp={testObject}
            />
        </div>
    )
}

export default ValidationTest