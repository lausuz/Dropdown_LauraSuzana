import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state=
    {
      jenjang : 'Pilih Jenjang',
      tingkatan:[],
      Pradasar :['PAUD (Pendidikan Anak Usia Dini)','TK (Taman Kanak-Kanak)','RA (Raudatul Athfal)'],
      Dasar : ['SD (Sekolah Dasar)','MI (Madrasah Ibtidaiyah)','SMP (Sekolah Menengah Pertama)','MTs (Madrasah Tsanawiyah)'],
      Menengah : ['SMA (Sekolah Menengah Atas)', 'MA (Madrasah Aliyah)','SMK(Sekolah Menengah Kejuruan)'],
      Tinggi : ['D3 Diploma','S1/D4 Sarjana' ,'S2 Magister','S3 Doktoral']
    }

  }
  klikpradasar(){
    this.setState({tingkatan:this.state.Pradasar})
    this.setState({jenjang:'Pendidikan Pra Sekolah'})
  }
  klikdasar(){
    this.setState({tingkatan:this.state.Dasar})
    this.setState({jenjang:'Pendidikan Dasar'})
  }
  klikmenengah(){
    this.setState({tingkatan:this.state.Menengah})
    this.setState({jenjang:'Pendidikan Menengah'})
  }
  kliktinggi(){
    this.setState({tingkatan:this.state.Tinggi})
    this.setState({jenjang:'Pendidikan Tinggi'})
  }
  render() {
  
    var listtingkatan = this.state.tingkatan.map(
      (val,i)=>{
        return <li> <a id='y' href='#a' onClick={()=>{klik()}}>{val}</a></li>
      }
    )
  
    function klik(){
      var isi = document.getElementById('y').innerHTML
      document.getElementById('x').innerHTML = isi
    }
    return (
      <div className="container">
        <p><div className='dropdown drop-style1'>
          <button className='btn-style btn btn-success dropdown-toggle form-control' data-toggle='dropdown'>
            <p>{this.state.jenjang} <div className='caret'></div> </p></button>
          <ul className='dropdown-menu'>
            <li><a href='#1' onClick={()=>{this.klikpradasar();}}> Pendidikan Pra Sekolah</a></li>
            <li><a href='#2' onClick={()=>{this.klikdasar();}}> Pendidikan Dasar </a> </li>
            <li><a href='#3' onClick={()=>{this.klikmenengah();}}> Pendidikan Menengah </a> </li>
            <li><a href='#4' onClick={()=>{this.kliktinggi();}}> Pendidikan Tinggi </a> </li>
          </ul>
        </div>

        <div className='dropdown drop-style2'>
          <button className='btn-style btn btn-danger dropdown-toggle form-control' data-toggle='dropdown'>
            <p id='x'>Pilih Tingkat <div className='caret'></div> </p></button>
          <ul id='z' className='dropdown-menu'>{listtingkatan}
            
          </ul>
        </div> </p>
        
      </div>
    );
  }
}

export default App;