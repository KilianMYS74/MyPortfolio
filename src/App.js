import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import $ from 'jquery';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GlobalFont from 'react-native-global-font'

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  setLanguage(language, idName) {
    document.getElementById(idName).removeAttribute('filter', 'brightness(40%)');
    var flagId = language === 'fr' ? 'english-flag' : 'french-flag';
    document.getElementById(flagId).setAttribute('filter', 'brightness(40%)')
    document.documentElement.lang = language;
    var langPath = document.documentElement.lang === 'fr' ? '/resumeData.json' : '/resumeDataEN.json';
    this.getResumeData(langPath);
  }

  componentDidMount() {
      let fontName = 'Comfortaa-Regular'
      GlobalFont.applyGlobal(fontName)
      this.setLanguage('fr', 'french-flag');
  }

  getResumeData(path) {
    $.ajax({
      url: path,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  // Render
  render() {
    return (
        <View style={styles.container}>
          <div>
            <Header data={this.state.resumeData.main} />
            <div className="col-md-12 mx-auto text-center language">
                <div
                  onClick={() => this.setLanguage('fr', 'french-flag')}
                  style={{display:'inline'}}>
                  <span
        className="iconify"
        data-icon="twemoji-flag-for-flag-france"
        data-inline="false"
        style={{fontSize: '50px', cursor: 'pointer'}}
        id="french-flag"
        />
                </div>
                <div
                  onClick={() => this.setLanguage('en', 'english-flag')}
                  style={{display:'inline', paddingLeft:20}}>
                  <span
        className="iconify"
        data-icon="twemoji-flag-for-flag-united-kingdom"
        data-inline="false"
        style={{fontSize: '50px', cursor: 'pointer'}}
        id="english-flag"
        />
                </div>
              </div>
            <About data={this.state.resumeData.main} />
            <Projects data={this.state.resumeData.projects} />
            <Skills data={this.state.resumeData.resume} />
            <Experience data={this.state.resumeData.experience} />
            <Footer data={this.state.resumeData.main} />
          </div>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default App;
