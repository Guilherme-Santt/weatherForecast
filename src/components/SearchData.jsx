import { useEffect, useState } from 'react';
import styles from './style.module.css';
import ResponseData from './TemplateData';

function SearchData() {
    const [local, setLocal] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        getData('Cotia, São Paulo');
    }, []);

    const handleChange = ((e) => {
        const { name, value } = e.target;
        if (name === 'local') {
            setLocal(value);
        }
    });

    const handleSubmit = ((e) => {
        e.preventDefault();
        if (local) {
            getData(local);
        } else {
            console.log("Por favor, digite um local para pesquisar.");
        }
    });

    const translateWeatherCondition = (conditionText) => {
        const translations = {
            'Sunny': 'Ensolarado',
            'Partly cloudy': 'Parcialmente Nublado',
            'Cloudy': 'Nublado',
            'Overcast': 'Encoberto',
            'Mist': 'Névoa',
            'Patchy rain possible': 'Possibilidade de Chuva Localizada',
            'Light rain': 'Chuva Fraca',
            'Moderate rain': 'Chuva Moderada',
            'Heavy rain': 'Chuva Forte',
            'Thunderstorm': 'Tempestade',
            'Clear': 'Céu Limpo',
        };
        return translations[conditionText] || conditionText;
    };

    async function getData(location) {
        const key = '98d3c2650c64460782f165056251806';
        const API_URL = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&lang=pt`;

        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

            const situacaoTraduzida = translateWeatherCondition(data.current.condition.text);
            
            document.querySelector('#local').innerHTML = data.location.name + ', ' + data.location.region;
            setWeatherData({
                local: data.location.name + ', ' + data.location.region,
                tempo: `${data.current.temp_c.toFixed(0)}°C`,
                situacao: situacaoTraduzida, 
                latitude: data.location.lat,
                longitude: data.location.lon,
            });

        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
            setWeatherData({
                local: 'Erro ao carregar',
                tempo: '--',
                situacao: 'Verifique o local ou sua conexão.'
            });
        }
    }

    const data = new Date();
    const dataFormatada = data.toLocaleDateString('pt-BR');

    return (
        <div className={styles.containerSearch}>
            <div>
                <h1>Previsão para hoje: {dataFormatada } <strong id='local'></strong></h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className={styles.inputType}
                        type="text"
                        name="local"
                        value={local}
                        onChange={handleChange}
                        placeholder="Digite o local (Ex: Cotia, SP)"
                    />
                    <button type="submit">Pesquisar</button>
                </form>
            </div>

            {weatherData ? (
                <ResponseData Data={weatherData} />
            ) : (
                <ResponseData
                    Data={{
                        local: 'Carregando...',
                        tempo: '--',
                        situacao: 'Aguarde ou pesquise um local'
                    }}
                />
            )}
        </div>
    );
}

export default SearchData;