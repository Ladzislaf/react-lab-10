import React from 'react'
import PropTypes from "prop-types"

const HelloWorldComponent = ({stringProp, symbolProp, arrayProp, boolProp, funcProp,
                                 numberProp, objectProp}) => {
    return (
        <>
            <h3 style={{textAlign: "center"}}>Validation test</h3>
        </>
    )
}

HelloWorldComponent.propTypes = {
    stringProp: PropTypes.string.isRequired,
    symbolProp: PropTypes.symbol,
    arrayProp: PropTypes.array,
    boolProp: PropTypes.bool,
    funcProp: PropTypes.func,
    numberProp: PropTypes.number,
    objectProp: PropTypes.object,
}

export default HelloWorldComponent