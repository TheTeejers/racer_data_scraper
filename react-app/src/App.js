import React, { useState, Component } from 'react';
import './App.css';
// import RacerData from './components/RacerData.js';
// import Routes from './components/Routes.js';
// import Footer from './components/Footer.js';
// // import Search from './components/Search.js';
// // import UserSearch1 from './components/UserSearch1.js';
// // import Home from './components/Home.js';
// // import RacerData from './components/RacerData.js';
// // import UsersFound from './components/UsersFound.js';
// // import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'

// hello
// this.handleYearSelect = this.handleYearSelect.bind(this);

// class RacerData extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       racerFullData: '',
//       racerHeatsData: '',
//       racerDataName: '',
//       racerCurrentPoints: '',
//       yearSelected: '',
//       kartSelected: '',
//       raceTypeSelected: '',
//       raceTrackSelected: ''
//     }
//   }
// }

function App() {

  return (
    <div className="App">
      <RaceInformation />

    </div>
  );
}
// var kartNumberList = []

// module.exports = variableName



function RaceInformation() {

  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [racerName, setRacerName] = useState('');
  const [fastestLapTime, setFastestLapTime] = useState([]);
  const [fastestSetLap, setFastestSetLap] = useState(['0']);
  const [fastestKart, setFastestKart] = useState('0');
  const [fastestDate, setFastestDate] = useState('0/0/0');
  const [totalRaces, setTotalRaces] = useState();




  // let count = 1
  // // let racerName = this.state.racerDataName
  // // let currentPoints = this.state.racerCurrentPoints
  // //TODO put in location to show on screen
  // let totalRaces
  // let fastestLapTime0 = [100000000]
  // // let fastestSetLap = [100000000]
  // let fastestLapDate0 = []
  // // let fastestLapDate1 = []
  // let fastestLapKart0 = []
  // // let fastestLapKart1 = []
  // let fastestLapType0 = []
  let heatData = []
  let fastestLap = []
  // let setFastestLapTime = []
  // let raceType = []
  // let raceKart = []
  // let raceYear = []
  // let trackNumber = []
  // let raceSelection = []
  let kartSelection = []
  // let yearSelection = []
  // let trackSelection = []
  // // let rememberButton = [<button key = {0} className='button inputButton searchButton' onClick={this.handleSaveRacer} ref='racerSave' value='2'>Remember Racer at {sessionStorage.getItem('trackLocation')}</button>]
  // let alreadySavedRacer = []













  var creds = {}
  creds.text = text
  creds.password = password
  creds.location = location

  var handleSubmit = async(evt) => {
    // let totalRaces
//


// <---------SESSIONS STORAGE INFORMATION-------------->
// // Save data to sessionStorage
// sessionStorage.setItem('key', 'value');
//
// // Get saved data from sessionStorage
// let data = sessionStorage.getItem('key');
//
// // Remove saved data from sessionStorage
// sessionStorage.removeItem('key');
//
// // Remove all saved data from sessionStorage
// sessionStorage.clear();


    setLoading(true)
    evt.preventDefault();
    console.log(`Submitting ${text}`);

    // const res = await fetch('http://localhost:5000/k1data/us-central1/scraper', {
    const res = await fetch('https://us-central1-k1data.cloudfunctions.net/scraper', {
        method: 'POST',
        body: JSON.stringify({creds}),
        // username: JSON.stringify({racerName})
    });

    //getting data
    const data = await res.json();
    setRacerName(data[0].nameData)
    // console.log(data)
    console.log(racerName);
    for (var p = 0; p < data.length; p++){
      // setFastestLapTime(fastestLapTime.push(data[p].bestTime))
    }
    console.log(fastestLapTime);
    setLinks(data);
    setLoading(false)


    //set data in to variables
    if (typeof data !== 'undefined') {
      var getBestTimes = []


      console.log("data length " + data.length);
      const dataLength = data.length;

      console.log(typeof totalRaces);
      for (var i = 0; i < dataLength; i++){
        const dataFull = data[i]
        getBestTimes.push(data[i].bestTime)

        // sessionStorage.removeItem('key');
        // console.log(sessionStorage.getItem('key'));


















        // setFastestLapTime(fastestLapTime.push(data[i].bestTime))
        kartSelection.push(dataFull.kartNumber)
        // console.log(dataFull);
        let yearOnly = dataFull.date.toString().split("/")[2]
        // console.log(yearOnly);
        // let kartNumberNumber = parseInt(sessionStorage.getItem('selected kart'),0)
        let trackNumberAll = dataFull.heatTypeAndKart.split(' ')
        // console.log(trackNumberAll);

        // let trackNumberOnly = trackNumberAll[trackNumberAll.length-2]
        var trackNumberOnly = ''
        // console.log(typeof "kart");

        if (trackNumberAll[trackNumberAll.length-2] !== "Kart"){
          let trackNumberOnly = trackNumberAll[trackNumberAll.length-1]
          // console.log("1111111 "+ trackNumberOnly);

        } else {
          let trackNumberOnly = '1'
          // console.log("22222222 "+ trackNumberOnly);
        }
        // console.log(Math.min(...setFastestLapTime))


        //Push data to table

        //(TODO some crazy logic stuff I don't currently remember what it does)
        // heatData.push(
        //   // [dataFull.raceNumber, dataFull.date]
        //     <tbody key={i}>
        //       <tr>
        //     //     <td>{dataFull.raceNumber}</td>
        //     //     <td>{dataFull.date}</td>
        //     //     <td>{dataFull.time}</td>
        //     //     <td><a href={dataFull.heatLink} target="_blank" rel="noopener noreferrer">{dataFull.heatType}</a></td>
        //     //     <td>{dataFull.kartNumber}</td>
        //     //     <td>{dataFull.position}</td>
        //     //     <td>{dataFull.bestTime}</td>
        //     //     <td>{dataFull.k1rsEarned}</td>
        //     //     <td>{dataFull.k1rsTotal}</td>
        //       </tr>
        //     </tbody>
        //
        //   )
          // console.log("heatData ");

          //
          // console.log(typeof Math.min(...fastestLapTime).toString());
          // console.log(typeof dataFull.kartNumber);
          // console.log(typeof dataFull.bestTime);


      }
      setFastestSetLap(Math.min(...getBestTimes))
      sessionStorage.setItem('times', Math.min(...getBestTimes));
      // console.log("In Storage: " + JSON.parse(sessionStorage.getItem('times')));
      console.log(getBestTimes);
      var storedArray = sessionStorage.getItem("times");//no brackets
      // var storedArray = JSON.parse(sessionStorage.getItem("times"));//no brackets
      console.log("stored date  " + storedArray);


      console.log(kartSelection);
      console.log({fastestSetLap});
      console.log(Math.min(...getBestTimes));
      // console.log(Math.min(...fastestLapTime))
      for (var p = 0; p < data.length; p++){
        if (Math.min(...getBestTimes).toString() === data[p].bestTime){
          setFastestKart(data[p].kartNumber)
          setFastestDate(data[p].date)
          // console.log(Math.min(...fastestSetLap).toString(), data[p].bestTime);

        } else {
          // console.log(fastestSetLap, data[p].bestTime);
        }
        // setFastestLapTime(fastestLapTime.push(data[p].bestTime))
      }
      // setFastestLapTime(Math.min(...fastestLapTime))
      // console.log({heatData});
      console.log(fastestKart);

    } else {
      console.log("hello");
    }
  }




  links.map(obj => <returnedRacerData key={obj.raceNumber} linkData={obj} />)

  return (
    <div>
      <h1>Form</h1>
      {/* Try this: <pre>a post with some links https://fireship.io and https://fireship.io/courses/javascript/</pre> */}

      <form onSubmit={handleSubmit}>
        <input rows="1" cols="50"
          placeholder="Racer ID"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          required>

        </input>
        <input rows="1" cols="50"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required>

        </input>
        <label><br/>

        <select onChange={e => setLocation(e.target.value)} required>
              <option value=''>Select Location</option>

              <option value="k1addison">Addison</option>
              <option value="k1anaheim">Anaheim</option>
              <option value="k1arlington">Arlington</option>
              <option value="k1atlanta">Atlanta</option>
              <option value="k1austin">Austin</option>
              <option value="k1boston">Boston</option>
              <option value="k1buffalogrove">Buffalo Grove</option>
              <option value="k1austin">Carlsbad</option>
              <option value="k1concord">Concord</option>
              <option value="k1dallas">Dallas</option>
              <option value="k1denver">Denver</option>
              <option value="k1dublin">Dublin</option>
              <option value="k1ftlauderdale">Fort Lauderdale</option>
              <option value="k1houston">Houston</option>
              <option value="k1indianapolis">Indianapolis</option>
              <option value="k1irvine">Irvine</option>
              <option value="k1kapolei">Kapolei</option>
              <option value="k1kingston">Kingston</option>
              <option value="k1miami">Miami</option>
              <option value="k1ontario">Ontario</option>
              <option value="k1orlando">Orlando</option>
              <option value="k1phx">Phoenix</option>
              <option value="k1poughkeepsie">Poughkeepsie</option>
              <option value="k1sacramento">Sacramento</option>
              <option value="k1saltlakecity">Salt Lake City</option>
              <option value="k1sanantonio">San Antonio</option>
              <option value="k1sandiego">San Diego</option>
              <option value="k1sanfrancisco">San Francisco</option>
              <option value="k1santaclara">Santa Clara</option>
              <option value="k1redmond">Seattle</option>
              <option value="k1torrance">Torrance</option>

            </select>
          </label>
        <br />
        <input type="submit" value="Submit" />
        </form>


        <h2>Racer  {racerName}</h2>
        <h3>Fastest Time: {fastestSetLap}</h3>
        <h3>Fastest Kart: {fastestKart}</h3>
        <h3>on {fastestDate}</h3>
        <h3>on {totalRaces}</h3>


        {loading &&  <h3>Fetching racer data...</h3> }


        <div className='tableContainer'>
          <table>
            <tbody>
              <tr>
                <th>Race Number</th>
                <th>Date</th>
                <th>Time</th>
                <th>Race Type</th>
                <th>Kart Number</th>
                <th>Position</th>
                <th>BestTime</th>
                <th>Points Earned</th>
                <th>Points Total</th>
              </tr>
            </tbody>
          </table>
          {heatData}

          { links.map(obj => <ReturnedRacerData key={obj.raceNumber} linkData={obj} />) }
        </div>



    </div>
    // sessionStorage.setItem('kartNumbers', )
  )
}



function ReturnedRacerData({ linkData }) {


  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{linkData.raceNumber}</td>
            <td>{linkData.date}</td>
            <td>{linkData.time}</td>
            <td><a href={linkData.heatLink} target="_blank" rel="noopener noreferrer">{linkData.heatType}</a></td>
            <td>{linkData.kartNumber}</td>
            <td>{linkData.position}</td>
            <td>{linkData.bestTime}</td>
            <td>{linkData.k1rsEarned}</td>
            <td>{linkData.k1rsTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}


export default App;
