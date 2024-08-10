
export default function TiendaLayout({ children }){
    return <>
    <nav>
        <h3>Seccion tiendas</h3>

        <ul>
            <li>
                Categorias
            </li>
            <li>
                Productos
            </li>
        </ul>
    </nav>
    {children}
    </>;
}