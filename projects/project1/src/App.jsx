import "./App.css";
export function App(){
    return(
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-avatar"
            src="https://unavatar.io/alejoevilches" 
            alt="Avatar del usuario" 
            />
            <div className="tw-followCard-info">
                <strong>Alejo Vilches</strong>
                <p>@alejoevilches</p>
            </div>
        </header>
        <aside>
            <button className="tw-followCard-button">Seguir</button>
        </aside>
    </article>
    )
}