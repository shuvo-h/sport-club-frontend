import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import biograpy from "../../Images/news_296_all-sports-banner_nq.png";
import Navigation from '../../Pages/Shared/Navigation/Navigation';
import {  
  faVideo  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container } from 'react-bootstrap';
import { Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import IosShareIcon from '@mui/icons-material/IosShare';
import { Box } from '@mui/system';
import './HockeyPlayersDetails';
import PlayerReviwe from '../../Pages/PlayerReviwe/PlayerReviwe';


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};




const HockeyPlayersDetails = () => {


let { id } = useParams();

const [hockeyPlayers, setHockeyPlayers] = useState([]);
const [singleHockeys, setSingleHockeys] = useState({});
/* const [quantity, setQuantity] = useState(1); */

useEffect(() => {
fetch('https://enigmatic-garden-34025.herokuapp.com/hockeyPuckPlayers',)
.then(res => res.json())
.then(data => setHockeyPlayers(data))
}, [])
useEffect(() => {
const foundPlayers = hockeyPlayers.find(player => (player.id === id))
setSingleHockeys(foundPlayers)
}, [hockeyPlayers, id])


  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);  


  const ininsialComment = { name: '', PlayerName: '', deatls: '', url: '',feedback: "", labels: "" };

  const [orderinfo, setOrderinfo] = useState(ininsialComment);



  const hendalOnBlure = data => {

    const filed = data.target.name;
    const value = data.target.value;
    const newValue = { ...orderinfo };
    newValue[filed] = value;
    setOrderinfo(newValue);
    console.log(newValue);  

  }



  const handelonSubmit = data => {
      data.preventDefault();
  
      
  
      const newDispalyReviwe = {
        ...orderinfo
      }
  
      fetch('https://enigmatic-garden-34025.herokuapp.com/review', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newDispalyReviwe)
      })
        .then(res => res.json())
        .then(data => console.log(data));
  
    }

    return (
      <>
        <Navigation />
        <>
        <div className='details-player-main' >
            <div className='details-player-bgimg'></div>
            <Container className='details-player-info'>
                <div>
                    <h1 className='details-player-title'>{singleHockeys?.name }  </h1>

                    <p className='details-player-des'>{singleHockeys?.describe }</p>
                    <button className='details-connecting'>Conecting</button>
                    <button className='details-player-video'><FontAwesomeIcon style={{marginRight:'5px'}}  icon={faVideo} />Play video</button>
                </div>
                <div>
                    {/* <div className='details-single-img'></div> */}
                    <img className='details-player-img' src={singleHockeys?.img } alt="" />
                </div>
            </Container>
        </div>
        </>
        
       
      <div className='biography container'>
      <div className='row'>
          <div className='col-md-6'>
          <div className='style-playerDetails'>
          <h1 style={{marginBottom: "50px", fontSize: "40px", fontWeight: "700"}} className='playerHeading'>Biography</h1>
          <h2 style={{marginBottom: "40px", fontSize: "30px", fontWeight: "600"}}>
            {singleHockeys?.name}
          </h2>

          <p style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", width: "500px"}}>{singleHockeys?.describe}</p>
          <p style={{marginBottom: "10px", fontSize: "20px", fontWeight: "400", width: "500px"}}>He has spent his entire professional career with Barcelona, where he has won a club-record 34 trophies, including ten La Liga titles, four UEFA Champions League titles and six Copas del Rey.</p>
          <p style={{marginBottom: "40px", fontSize: "20px", fontWeight: "400", width: "500px"}}>A prolific goalscorer and a creative playmaker, Messi holds the records for most goals in La Liga (419), a La Liga and European league season (50), most hat-tricks in the UEFA Champions League (8), and most assists in La Liga (169) and the Copa América (12). He has scored 698 senior career goals for club and country.</p>
          <div>
              <table>
                  <tbody>
                      <tr>
                          <td style={{ fontWeight: "600", fontSize: "16px"}}><strong>Height</strong></td>
                          <td style={{color: "#dc3545", fontWeight: "700", fontSize: "18px"}}>{singleHockeys?.Height}</td>
                      </tr>
                      <tr>
                          <td style={{ fontWeight: "600", fontSize: "16px"}}><strong>Weight</strong></td>
                          <td style={{color: "#dc3545", fontWeight: "700", fontSize: "18px"}}>{singleHockeys?.Weight}</td>
                      </tr>
                      <tr>
                          <td style={{ fontWeight: "600", fontSize: "16px"}}><strong>Position</strong></td>
                          <td style={{color: "#dc3545", fontWeight: "700", fontSize: "18px"}}>{singleHockeys?.Position}</td>
                      </tr>
                      <tr>
                          <td style={{ fontWeight: "600", fontSize: "16px"}}><strong>Nationality</strong></td>
                          <td style={{color: "#dc3545", fontWeight: "700", fontSize: "18px"}}>{singleHockeys?.Nationality}</td>
                      </tr>
                  </tbody>
              </table>
          </div>

          </div>
          </div>
          <div className='col-md-6 banner'>
              <img src={biograpy} alt="" />
          </div>
      </div>
  </div>
 
<div className="playerman container">
  <h1 style={{marginTop:  "100px", marginBottom: "50px"}}>Player Say!</h1>
  <div className="player">
  <img src={singleHockeys?.img} alt="" />
  <h2>{singleHockeys?.name}</h2>
  <h4>{singleHockeys?.Position}</h4>
  <p>{singleHockeys?.describe}</p>
  </div>
 
</div>

<PlayerReviwe />

<Container className="Player-All">
    
    <div className="From-Main">
     
        <Button style={{background: "#dc3545", border: "none", padding: "10px 10px"}}>#Tell Us About Your Player Feedback </Button>

        <h2 style={{marginBottom: "20px", marginTop: "50px"}}>About Your Feedback</h2>
        <div className="border">

        </div>

        <form className='From' >


          <div className="Rating">
            <Typography sx={{ fontWeight: '700' }} >Your Rating</Typography>
            <Rating
              name="feedback"
              onBlur={hendalOnBlure}
              value={value}
              precision={0.5}

              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
              <Box  sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}

          </div>

          <input className='textarea' onBlur={hendalOnBlure} type="text" name='deatls' placeholder='Type Your Feedback' />
          <br />
          <input type="text" name='name'
            onBlur={hendalOnBlure} id="" placeholder='Your Name' />

          <input type="text" name='email'
            onBlur={hendalOnBlure} id="" placeholder='Your Email' />

          

          <input name='PlayerName'
            onBlur={hendalOnBlure} defaultValue={singleHockeys?.name} type="text" id="" placeholder='Player Name' />

          <input  type="url" name="url" onBlur={hendalOnBlure} id="" placeholder='Type a Photo url' />

          <br /><br />
          <Button onClick={handelonSubmit}

style={{background: "#dc3545", border: "none", padding: "10px 10px"}} >Submit <IosShareIcon /></Button>


        </form>


      </div>
    



  </Container>

  
  </>
 
    );
};

export default HockeyPlayersDetails;