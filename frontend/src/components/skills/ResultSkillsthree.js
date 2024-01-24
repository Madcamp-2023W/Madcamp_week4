import React from 'react'
import '../../static/skillsthree.scss'
import Layer from './Layer'

function ResultSkillsthree({frontend, backend, others}) {
    console.log(frontend)
    console.log(backend)
    console.log(others)

  return (
    <div className='skills-container-three' style={{backgroundColor: '#e7e6e6'}}>
        <h2>Main Skills</h2>

                    <div className='layer-container'>
                    <h2 style={{textAlign: 'center'}}>Frontend</h2>
                    <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                        {
                            frontend.map((e,index) => (
                                    <div key={index}  
                                        style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '100px', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                    </div>
                            ))}
                    </div>
                </div>
                <div className='layer-container'>
                    <h2 style={{textAlign: 'center'}}>Backend</h2>
                    <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                        {
                            backend.map((e,index) => (
                                    <div key={index}  
                                        style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '100px', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                    </div>
                            ))}
                    </div>
                </div>
                <div className='layer-container'>
                    <h2 style={{textAlign: 'center'}}>Others</h2>
                    <div className='layer-cards' style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '30px'}} >
                        {
                            others.map((e,index) => (
                                    <div key={index}  
                                        style={{backgroundImage: `url(${e})`,borderRadius: '20px', backgroundColor: 'white', width: '100px', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'}}>
                                    </div>
                            ))}
                    </div>
                </div>
    </div>
  )
}

export default ResultSkillsthree
