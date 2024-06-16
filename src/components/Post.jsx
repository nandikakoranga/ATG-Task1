import React from 'react'

export default function Post() {
    return (
        <section className="d-flex justify-content-end align-items-end position-sticky d-md-none"
            style={{ zIndex: 999, bottom: 0, right: 0, padding: 1 + "rem", height: 2 + "rem" }}>
            <div style={{ height: 5 + "rem", width: 5 + "rem" }}>
                <button type="button" className="btn btn-outline-light" data-bs-toggle="modal"
                    data-bs-target="#registerModal">  <img className="hei-dis" src="./images/Group6.png" alt="" /> </button>

            </div>
        </section>
    )
}
