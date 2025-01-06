import React, { useState, useEffect } from 'react';
import './conversor.css';

const Conversor = () => {
  const [valor, setValor] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const moedaOrigem = 'BRL'; // Moeda de origem fixa
  const moedaDestino = 'USD'; // Moeda de destino fixa

  useEffect(() => {
    if (valor && !isNaN(valor)) {
      convertCurrency(valor);
    } else {
      setResult(null); // Limpa o resultado se o valor for inválido
    }
  }, [valor]);

  const convertCurrency = async (amount) => {
    setLoading(true);
    try {
      const amountToConvert = amount.replace(',', '.');
      const response = await fetch(
        `https://api.exchangerate.host/convert?access_key=bc2950e9a026aa37b4f308eefe5b8640&from=${moedaOrigem}&to=${moedaDestino}&amount=${amountToConvert}`
      );
      const data = await response.json();
      if (data && data.result) {
        setResult(data.result.toFixed(2));
      } else {
        alert('Erro ao buscar conversão.');
      }
    } catch (error) {
      console.error('Erro na conversão:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    let value = e.target.value;


    const invalidChars = /[^0-9,]/g;
    if (invalidChars.test(value)) {
      alert('Apenas números e vírgula são permitidos.');
      value = value.replace(invalidChars, '');
    }
    setValor(value);
  };

  const formatCurrency = (value, currency) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency,
    }).format(value);
  };

  return (
    <div className="conversor">
      <h1>Conversor de Moedas</h1>
      <div className="conversor-data">
        <div className="valor">
          <label>
            Valor em {moedaOrigem}:
            <input
              type="text" 
              name="valor"
              value={valor}
              onChange={handleInputChange}
              placeholder="Digite o valor"
            />
          </label>
        </div>
      </div>
      {loading ? (
        <p>Convertendo...</p>
      ) : (
        result && (
          <div>
            <h2>Resultado:</h2>
            <p>
              {formatCurrency(valor, 'BRL')} = {formatCurrency(result, 'USD')}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default Conversor;