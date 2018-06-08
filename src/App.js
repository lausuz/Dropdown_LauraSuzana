import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state=
    {
      jenjang : 'Pilih Jenjang',
      tingkatan:[],
      Pradasar :['PAUD (Pendidikan Anak Usia Dini)','TK (Taman Kanak-Kanak)','RA (Raudatul Athfal)'],
      Dasar : ['SD (Sekolah Dasar)','MI (Madrasah Ibtidaiyah)','SMP (Sekolah Menengah Pertama)','MTs (Madrasah Tsanawiyah)'],
      Menengah : ['SMA (Sekolah Menengah Atas)', 'MA (Madrasah Aliyah)','SMK(Sekolah Menengah Kejuruan)'],
      Tinggi : ['D3 Diploma','S1/D4 Sarjana' ,'S2 Magister','S3 Doktoral']
    }

    pertama =() =>{     
      this.setState({
        terpilihtingkat:'Pendidikan Pra Sekolah' ,
        awal:'Jenjang Pendidikan Pra Sekolah',
        satu:'PAUD (Pendidikan Anak Usia Dini)',
        dua:'TK (Taman Kanak-kanak)',
        tiga:'RA (Raudhatul Athfal)',
      })
      this.setState({tingkatan:this.state.Pradasar})
      this.setState({jenjang:'Pendidikan Pra Sekolah'});   
    }
  
    kedua =() =>{     
      this.setState({
        terpilihtingkat:'Pendidikan Dasar' ,
        awal:'Jenjang Pendidikan Dasar',
        satu:'SD (Sekolah Dasar )',
        dua:'MI (Madrasah Ibtidaiyah)',
        tiga:'SMP (Sekolah Menegah Pertama)',
        empat:'MTs (Madrasah Tsanawiyah)',
      })
      this.setState({tingkatan:this.state.Dasar})
      this.setState({jenjang:'Pendidikan Dasar'});   
    }
  
    ketiga =() =>{     
      this.setState({
        terpilihtingkat:'Pendidikan Menengah' ,
        awal:'Jenjang Pendidikan Menengah',
        satu:'SMA (Sekolah Menegah Atas)',
        dua:'MA (Madrasah Aliyah)',
        tiga:'SMK (Sekolah Menengah Kejuruan)',
      })
      this.setState({tingkatan:this.state.Menengah})
      this.setState({jenjang:'Pendidikan Menengah'});   
    }
  
    keempat =() =>{     
      this.setState({
        terpilihtingkat:'Pendidikan Tinggi' ,
        awal:'Jenjang Pendidikan Tinggi',
        satu:'D3 Diploma',
        dua:'S1/D4 Sarjana',
        tiga:'S2 Magister',
        empat:'S3 Doktoral',
      })
      this.setState({tingkatan:this.state.Tinggi})
      this.setState({jenjang:'Pendidikan Tinggi'});   
    }

  

  // klikpradasar =() => {
  //   this.setState({tingkatan:this.state.Pradasar})
  //   this.setState({jenjang:'Pendidikan Pra Sekolah'})       
  // }
  // klikdasar =() =>{
  //   this.setState({tingkatan:this.state.Dasar})
  //   this.setState({jenjang:'Pendidikan Dasar'})
  // }
  // klikmenengah =() =>{
  //   this.setState({tingkatan:this.state.Menengah})
  //   this.setState({jenjang:'Pendidikan Menengah'})
  // }
  // kliktinggi =() =>{
  //   this.setState({tingkatan:this.state.Tinggi})
  //   this.setState({jenjang:'Pendidikan Tinggi'})
  // }

  render =() => {
  
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
            <li><a href='#1' onClick={()=>{this.pertama();}}> Pendidikan Pra Sekolah</a></li>
            <li><a href='#2' onClick={()=>{this.kedua();}}> Pendidikan Dasar </a> </li>
            <li><a href='#3' onClick={()=>{this.ketiga();}}> Pendidikan Menengah </a> </li>
            <li><a href='#4' onClick={()=>{this.keempat();}}> Pendidikan Tinggi </a> </li>
          </ul>
        </div>
     
        </p>


        <div>          
        <ul type="disc">
          <li><b> {this.state.awal}</b></li>
        </ul>
        <ul type="circle">        
          <li> {this.state.satu} </li>
          <li> {this.state.dua} </li>
          <li> {this.state.tiga} </li>
          <li> {this.state.empat} </li>                    
        </ul>
        </div>
  
        
      </div>
    );
 }
}


export default App;

/* <div>
        <ul type="disc">        
          <li>Pendidikan Dasar</li>
        </ul>
        <ul type="circle">
          <li> SD (Sekolah Dasar) </li>
          <li> MI (Madrasah Ibtidaiyah) </li>
          <li> SMP (Sekolah Menengah Pertama) </li>
          <li> MTs (Madrasah Tsanawiyah) </li>
        </ul>
        </div>

        <div>
        <ul type="disc">        
          <li>Pendidikan Menengah</li>
        </ul>
        <ul type="circle">
          <li> SMA (Sekolah Menengah Atas) </li>
          <li> MA (Madrasah Aliyah) </li>
          <li> SMK(Sekolah Menengah Kejuruan) </li>
        </ul>
        </div>
        
        <div>
        <ul type="disc">        
          <li>Pendidikan Tinggi</li>
        </ul>
        <ul type="circle">
          <li> D3 Diploma </li>
          <li> S1/D4 Sarjana </li>
          <li> S2 Magister </li>
          <li> S3 Doktoral </li>
        </ul>
        </div> */