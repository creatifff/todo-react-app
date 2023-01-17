import style from './header.module.css';

const header = () =>{
    return (
        <>
            <header className={style.header}>
                <h1>Header</h1>
                <nav className={style.nav}>
                    <a href="#">Main</a>
                    <a href="#">Catalog</a>
                    <a href="#">About WW</a>
                    <a href="#">Contacts</a>
                </nav>
            </header>

                
        </>
    )
}

export default header