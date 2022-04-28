import React from 'react'
import PropTypes from 'prop-types'

const FormInfoHandler = ({name, surname, secondName}) => {
    return (
        <div style={{textAlign:'center'}}>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{secondName}</p>
        </div>
    )
}

FormInfoHandler.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    secondName: PropTypes.string,
}

export default FormInfoHandler