function Contact()
{
    return(

        <div class="container">
            <div class="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required/>

                <label for="message">Message:</label>
                <textarea id="message" name="message" required/>

                <button type="submit">Send Message</button>
            </div>

            <div class="contact-info">
                <h2>Our Contact Details</h2>
                <p><strong>Address:</strong> 123 Tech Street, Nairobi, Kenya</p>
                <p><strong>Phone:</strong> +254 700 000 000</p>
                <p><strong>Email:</strong> info@techsolutions.com</p>
                <p><strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 5:00 PM</p>
            </div>
        </div>
    )
}
export default Contact;
