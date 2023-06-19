import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className='bg-teal-300'>
      <div className='flex justify-between pb-10 pl-[2%] border-b-2 pt-[2%]'>
      <p className='font-bold text-black'>Get connected with us on social networks:</p>
        <div className='flex gap-10 mr-[5%]'>
        <FacebookIcon/>
        <TwitterIcon/>
        <GoogleIcon/>
        <InstagramIcon/>
        <GitHubIcon/>
        </div>
      </div>
      <div className='grid grid-cols-3 justify-items-center pl-[2%] pb-10'>
        <div>
          <h1 className='footerH1 uppercase'>auto laos company</h1>
          <div>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div>
          <h1 className='footerH1'>PRODUCTS</h1>
          <div>
            <p>Angular</p>
            <p>React</p>
            <p>Vue</p>
            <p>Laravel</p>
          </div>
        </div>
        <div>
          <h1 className='footerH1'>USEFUL LINKS</h1>
          <div>
            <p>Pricing</p>
            <p>Settings</p>
            <p>Orders</p>
            <p>Help</p>
          </div>
        </div>

      </div>
      <p className='text-center pb-10'>&copy; 2023 Copyright: Auto Laos company</p>
    </footer>
  )
}

export default Footer