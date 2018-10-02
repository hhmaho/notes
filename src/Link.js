import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

const LinkView = ({ title, go, href }) => (
    <a href={href} onClick={go}>{title}</a>
)

const mapDispatchToProps = (dispatch, props) => ({
    go: (e) => {
        dispatch(push(props.href))
        e.preventDefault()
    },
})

export default connect(null, mapDispatchToProps)(LinkView);