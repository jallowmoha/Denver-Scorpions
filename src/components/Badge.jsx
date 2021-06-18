import React from 'react'

import Badge from '../images/badge.jpg'
import Image from 'react-bootstrap/Image'

export const BrandBadge = () => {
    return (
        <div>
            <img
                src={Badge}
                className="badge-img"
            />
        </div>
    )
}
