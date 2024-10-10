import './style.css'
export default function FormRegistro() {
    return (
        <>
            <form>
                <div className="registro">
                    <h2>Registro</h2>
                    <input type="text" placeholder="nome"/>
                    <input type="number" placeholder="numero"/>
                    <input type="text" placeholder="endereço"/>
                </div>
            </form>
        </>
    )
}