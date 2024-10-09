import './form.css'
export default function Form () {
    return (
        <>
        <div id="div-login">
            <h1 id="besta-quadrada">Login</h1>
            <div id="login-tela">
                <input type="text" name="user" id="user" placeholder="Usuário"/>
                <input type="password" name="password" id="password" placeholder="Senha"/>
                <button type="submit" id="seubutao">Enviar</button>
            </div>
        </div>
        </>
    )
}