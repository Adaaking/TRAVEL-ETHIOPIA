import React,{useRef,} from 'react'
import { FiPhoneCall,FiMail, FiMap} from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
const formRef =useRef()
const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_69omdwk', 'template_qesn2ug', formRef.current, 'NFtahAYpZfi6NRCS0')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
  return (
    <div className='contact'>
        <h1>Our Contact</h1>
        <p className='top'> As the country’s capital, it is obvious that Addis tops our list of cities in Ethiopia.
            You will find here different people and cultures inhabit this tech and biz hub.</p>
        <div className='contact-container'>
            <form className='contact_left' ref={formRef} onSubmit={sendEmail}>
                <div className='contact_info'>
                    <input type="text" placeholder='name' id = 'name' name = 'user_name'required/>
                    <input type="text" placeholder='phone'required/>
                    <input type="email" placeholder='email'  id = 'email' name = 'user_email' required/>
                    <input type="text" placeholder='city'required/>
                </div>
                <div className='message'>
                  <textarea style={{color:"white"}} rows="15" placeholder='Comments/Message' id='message'  name='message' required/>
                </div>
                <button>send</button>
            </form> 
            <div className='contact_right'>
                <div className='addresses'>
                        <FiMap className='ofice_icon'/>
                    <div className='address_text'>
                        <h2 style={{paddingBottom:"0.5rem"}}>office address</h2>
                        <p> 6 kilo, next to the campus</p>
                        <p>Addis Ababa Ethiopia</p>
                    </div>
                </div>
                <div className='addresses'>
                        <FiPhoneCall className='ofice_icon'/>
                    <div className='address_text'>
                        <h2 style={{paddingBottom:"0.5rem"}}>Call Us</h2>
                        <p> +251961439185 </p>
                        <p> +251961439185 </p>
                    </div>
                </div>
                <div className='addresses'>
                        <FiMail className='ofice_icon'/>
                    <div className='address_text'>
                        <h2 style={{paddingBottom:"0.5rem"}}>Message US</h2>
                        <p>addisumotora3@gmail.com</p>
                        <p>addisumotora349@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact