import React from 'react';
const backgroundImage=(season)=>{
    const container=document.querySelector('.season-container');
    if(season==='summer')
    {
        container.style.backgroundImage="url('summer.jpg')";
    }

    else{
        container.style.backgroundImage="url('winter.jpg')";
    }
}

const getSeason=(lat,month)=>
{
    if(month>2 && month<9)
    {
        return lat>0?'summer':'winter';
    }
    else
    {
        return lat>0?'winter':'summer';
    }
}

const SeasonDisplay=(props)=>{
    const season=getSeason(props.lat, new Date().getMonth());
    const text=(season==='summer')?"It's summer in your area!":"It's winter in your area!";
    backgroundImage(season);
    return <div className='season-container'>
        <h1>{text}</h1>
    </div>
}

export default SeasonDisplay;