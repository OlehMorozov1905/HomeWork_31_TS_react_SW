import { useContext } from 'react'
import { StarWarsContext } from '../utils/hookUseContext'

interface Props {
    itemTitle: string
}

const NavItem = ({ itemTitle }: Props) => {

    const { setPage } = useContext(StarWarsContext);

    return (
        <li onClick={() => setPage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    )
}

export default NavItem
