import { useState, useEffect } from 'react';
import { MagnifyingGlass, MapPin, CaretDown } from "phosphor-react";
import './search.css';

export default function Search() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChange = (event: any) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className='content'>
            <form className='search'>
                <div className='search-field'>
                    <label className='sr-only' htmlFor="name">Pesquise por nome</label>
                    <MagnifyingGlass className='icon input-text' size={32} weight="light" />
                    <input type="text" id="name" name="name" placeholder='Pesquise por nome' value={searchValue} onChange={handleSearchInputChange} />
                </div>

                <div className='search-field select'>
                    <label className='sr-only' htmlFor='city'>Selecione uma cidade</label>
                    <MapPin className='icon' size={32} weight="light" />
                    <select name='city' id="city">
                        <option value="all" disabled selected hidden>Todas as cidades</option>
                        <option value="sao-paulo">São Paulo</option>
                        <option value="rio-de-janeiro">Rio de Janeiro</option>
                        <option value="salvador">Salvador</option>
                        <option value="campinas">Campinas</option>
                    </select>
                    <CaretDown className='icon icon-select' size={18} weight="bold" />
                </div>
                <button className='btn primary'>Buscar agora</button>
            </form>
        </div>
    )
}