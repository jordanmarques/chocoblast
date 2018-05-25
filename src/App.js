import React, {Component} from 'react';
import croissant from './croissant.svg';
import './App.scss';
import './Buttons.scss';
import './Explosion.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      shouldExplode: false
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={croissant} className="App-logo" alt="logo"/>
          <h1 className="App-title">Comité de Prévention à la sécurité</h1>
        </header>
        <div className="body">
          {this.generateCroissants(50)}
          <button id="chocoblaster-btn" className="btn red"
                  onClick={() => this.chocoblaster()}>
            Chocoblaster
          </button>
        </div>
      </div>
    );
  }

  chocoblaster() {
    this.setState({shouldExplode: true});
    let url = "https://mail.google.com/mail/u/0/?view=cm&fs=1&su=Douceurs chocolatées&body=Douceurs chocolatées\n" +
      "\n" +
      "Chères collaboratrices, chers collaborateurs,\n" +
      "\n" +
      "Je vous informe avec plaisir que je viens d'être ChocoBLASTé(e). Ainsi, je vous proposerai des viennoiseries chocolatées pour accompagner votre café.\n" +
      "\n" +
      "Comme le stipule le réglement, j'ai 10 jours ouvrés à compter d'aujourd'hui pour vous offrir ces douceurs chocolatées. \n" +
      "\n" +
      "Je vous souhaite une agréable fin de journée,\n" +
      "\n" +
      "Chocolatement\n" +
      "\n" +
      "-- \n" +
      "\n" +
      "Votre Comité de Prévention à la sécurité \n" +
      "\n" +
      "ChocoBLAST \n" +
      "Reconnu d'utilité publique";

    setTimeout(function(){
      let encodedUrl = encodeURI(url);
      window.open(encodedUrl)
    }, 1500);
  }

  generateCroissants(number) {
    const {shouldExplode} = this.state;
    var croissants = [];
    for (var i = 0; i < number; i++) {
      croissants.push(<div className={shouldExplode ? 'box' : ''}
                           onAnimationEnd={() => this.setState({shouldExplode: false})}/>)
    }

    return croissants
  }

}

export default App;
