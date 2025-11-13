function Imagens() {
  const imagens = [
    "https://www.omnieventos.com/wp-content/uploads/2018/06/eventos-corporativos.jpg",
    "https://media.gazetadopovo.com.br/2024/03/27110327/grupo-amigos-comer-em-restaurante-960x540.jpg",
    "https://cdn.atletis.com.br/atletis-website/base/b0a/2e6/fd6/principais-eventos-esportivos-brasil.jpg",
    "https://www.findup.com.br/wp-content/uploads/2024/02/Prancheta-1.png"
  ];

  const imagensDuplicadas = [...imagens, ...imagens];

  return (
    <div className="faixa-imagens">
      <div className="container-imagens">
        {imagensDuplicadas.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            onError={(e) => {
              e.target.style.display = "none"; // Oculta imagem quebrada
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Imagens;
