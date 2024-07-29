import { MouseEvent, useState } from 'react'
import styles from '../../ui/styles/contact-form.module.css'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e: MouseEvent<HTMLInputElement>): void {
        e.preventDefault()
        let data = {
            name,
            email,
            message
        }
        console.log('Sending', data)
   
        fetch('/api/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
            }
        })
    }
    return (
        <div className={`${styles.container}`}>
            <form action="action_page.php">
                <label>Nome e Sobrenome</label>
                {/* // for="fname" */}
                <input type="text" id="fname" name="firstname" placeholder="Seu nome e sobrenome.." onChange={(e)=>{setName(e.target.value)}} />

                <label>Email</label>
                {/* // for="lname" */}
                
                <input type="text" id="lname" name="lastname" placeholder="exemplo@email.com.br" onChange={(e)=>{setEmail(e.target.value)}} />

                <label>Como conheceu a Flames?</label>
                {/* // for="country" */}
                <select id="origin" name="origin" onChange={(e)=>{setName(e.target.value)}} >
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="google">Google</option>
                    <option value="recommended">Recomendação de conhecidos</option>
                </select>

                <label 
                // for="subject"
                >Mensagem</label>
                <textarea id="subject" name="subject" placeholder="Sua mensagem..." onChange={(e)=>{setMessage(e.target.value)}} ></textarea>
                <input type="submit" value="Enviar" onClick={(e)=>{handleSubmit(e)}}/>
            </form>
        </div>
    );
}