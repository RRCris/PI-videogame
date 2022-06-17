import "./styles/navBar.css";
export function Navbar(){
    return(
        <div className="navBar">
            <div className="contentButtons">

            <button className="buttonNav">Home</button>
            <button className="buttonNav">About me</button>
            <button className="buttonNav">Genres</button>
            <button className="buttonNav">Plataforms</button>

            </div>
            <div className="contentSearch">
                <div className="groupInputSearch">
                    <input type="text" name="search" id="" placeholder="Search"/>
                    <label >Search</label>
                    <img/>
                </div>
            </div>
            <div className="contentUser">
                <button >Iniciar seccion</button>
                <button className="buttonOptinal">Registrar</button>
            </div>
        </div>
    )
}