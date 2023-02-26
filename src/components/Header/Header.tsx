import Search from '../Search/Search';
import './header.css';

export default function Header() {
    
    return (
        <header>
            <div className='content'>
                <div className='top'>
                    <p>find your block</p>
                    <h1>Encontre os <span>melhores blocos</span> de carnaval de 2023</h1>
                </div>

                <Search />
            </div>
        </header>
    )
}