import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/proxy/YkP6noeOAuN0o71omP3l-cOEDIiqrBpaTC1Nsy6IbioVK8O8pTrxAESyqkWzwr5YkOjw-udPxWPTUENJkbPKDpkwUUi1Xj_tbqIToM8K9PU57w" 
          nome="Victor Nogueira Duarte Santos" 
          descricao="Olá, meu nome é Victor Nogueira. Sou estudante da labenu cursando Web Full Stack. Sou formado em direito, porém, estou em transição de carreira para a área da tecnologia da informação, mais precisamente para analise e desenvolvimento de sistemas."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno 
        imagemEmail="https://www.caceres.mt.leg.br/banco-de-imagens/email.png/image"
        imagemLocal="https://www.caceres.mt.leg.br/banco-de-imagens/placeholder.png/image"
        email="E-mail:" 
        enderecoEmail="victor@victor.com"
        endereco="Endereço:"
        rua="Rua dos alfeneiros, nº 4"
        />
      </div>



      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Cursando Web Full Stack" 
        />
        
        <CardGrande 
          imagem="https://www.televendasecobranca.com.br/wp-content/uploads/2013/07/Intervalor-inaugura-unidade-em-osasco-televendas-cobranca.jpg" 
          nome="Teixeira e Targino Advogados Associados" 
          descricao="Recuperação de crédito junto aos principais bancos nacionais." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
