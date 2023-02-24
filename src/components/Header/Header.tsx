import './styles.css'
import { MagnifyingGlass, MapPin, CaretDown } from "phosphor-react";

export default function Header() {
    return (
        <header>
            <div className='content'>
                <div className='top'>
                    <p>find your block</p>
                    <h1>Encontre os <span>melhores blocos</span> de carnaval de 2023</h1>
                </div>

                <form className='search'>
                    <div className='search-field'>
                        <label className='sr-only' htmlFor="name">Pesquise por nome</label>
                        <MagnifyingGlass className='icon input-text' size={32} weight="light" />
                        <input type="text" id="name" name="name" placeholder='Pesquise por nome' />
                    </div>

                    <div className='search-field selected'>
                        <label className='sr-only' htmlFor='city'>Selecione uma cidade</label>
                        <MapPin className='icon' size={32} weight="light" />
                        <select name='city' id="city">
                            <option value="0" selected>Selecione sua cidade</option>
                            <option value="sao-paulo">São Paulo</option>
                            <option value="rio-de-janeiro">Rio de Janeiro</option>
                            <option value="salvador">Salvador</option>
                            <option value="campinas">Campinas</option>
                        </select>
                        <CaretDown className='icon' size={18} weight="bold" />
                    </div>
                    <button>Buscar agora</button>
                </form>
            </div>
        </header>
    )
}