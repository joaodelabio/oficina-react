import './cadastro.css'
export default function FormCadastro () {
    return (
        <>
        <div id="div-cadastro">
            <div id="cadastro-tela">
                <h2>Cadastro</h2>
                
                <input type="text" name="nome" id="nome" placeholder="Nome"/>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="password" name="password" id="password2" placeholder="Senha"/>
                <input type="number" name="numero" id="numero" placeholder="Número"/>
                <input type="text" name="endereco" id="endereco" placeholder="Endereço"/>
                <button type="submit" id="seubutao2">Enviar</button>
            </div>
        </div>
        </>
    )
}