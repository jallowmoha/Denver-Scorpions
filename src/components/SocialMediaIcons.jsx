import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Box } from '@material-ui/core';




export const SocialMediaIcons = () => {
    return (
        <div className='row social-icons'>
            <Box display="flex" justifyContent="space-between">
                 <FacebookIcon
                    className='icons'
                    fontSize='large'
            />
            <TwitterIcon
                    className='icons'
                    fontSize='large'
            />
            <InstagramIcon
                    className='icons'
                    fontSize='large'
            />

            </Box>
           
        </div>
    )
}
