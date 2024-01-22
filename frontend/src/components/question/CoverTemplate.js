import React, {useState} from 'react'
import '../../static/covertemplate.scss'
import coverOneImage from '../../assets/coverone.png';
import CoverInfo from './CoverInfo';
import { useNavigate } from 'react-router-dom';


function CoverTemplate() {
    const navigate = useNavigate();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    
    const signal = [0,0,0]

    const handleNextClick = () => {
        navigate('/abouttemplate');
    }
    const [status, setStatus] = useState(0)
    const handleInfo = () => {
        setStatus(1)
    }   
    const handleAnswerClick = (answer, e) => {
        setSelectedAnswer(answer);
        if(signal[e] == 0) {
            signal[e] = 1
        }
        else{
            signal[e] = 0
        }
        console.log(signal)
      };


  return (
    <>
        <div className='cover-template-wrapper'>
            <div className='question-title'>Choose your template</div>
            <div className='question-subtitle'>마음에 드는 템플릿을 선택해주세요</div>
            <div className='question-box' style={{display: 'flex',justifyContent: 'center',  flexDirection: 'row', width: '100%', gap: '50px', flexWrap: 'wrap' }}>
                    <div className={`answerone ${selectedAnswer === 'answerone' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answerone', 0)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                        <div className='display-one' style={{backgroundImage: `url(${coverOneImage})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>Cover</p>
                    </div>
                    <div className={`answertwo ${selectedAnswer === 'answertwo' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answertwo', 1)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                    <div className='display-one' style={{backgroundImage: `url(${coverOneImage})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>About Me</p></div>
                    <div className={`answerthree ${selectedAnswer === 'answerthree' ? 'selected-answer' : ''}`} onClick={() => handleAnswerClick('answerthree', 2)} style={{width: '350px', height: '300px',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)', textAlign: 'center', borderRadius: '20px', backgroundColor: 'white'}} >
                    <div className='display-one' style={{backgroundImage: `url(${coverOneImage})` , height: '170px',width: '350px', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        </div>
                        <p>Skills</p></div>
                    <button onClick={handleInfo} className='next-button' style={{backgroundColor: '#367AFF', width: '80px', borderRadius: '20px', border: '1px solid white', marginTop: '10px'}}><p style={{color: 'white'}}>Next</p></button>
                    <button onClick={handleNextClick} className='next-button' style={{backgroundColor: '#367AFF', width: '80px', borderRadius: '20px', border: '1px solid white', marginTop: '10px'}}><p style={{color: 'white'}}>About Me</p></button>

            </div>

        </div>
        {status == 1 && <CoverInfo status={status}/> }

        </>
  )
}

export default CoverTemplate
