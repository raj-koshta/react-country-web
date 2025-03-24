import React from 'react'

const Contact = () => {

  const handleFormSubmit = (formData) =>{
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  }

  return (
    <section className='section-contact'>
      <h2 className='container-title'>
        Contact Us
      </h2>

      <div className='contact-wrapper container'>
        <form action={handleFormSubmit}>
          <input type='text' required
            className='form-control'
            autoComplete='off'
            placeholder='Enter your name'
            name="username" />
          <input type='email' required
            className='form-control'
            autoComplete='off'
            placeholder='Enter your email'
            name="email" />
          <textarea className='form-control'
            rows="10"
            placeholder='Enter your message'
            name='message'
            required autoComplete='off'></textarea>

          <button type='submit' value="send">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact