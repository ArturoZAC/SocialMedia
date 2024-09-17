import fbLogo from '../assets/images/icon-facebook.svg'
import igLogo from '../assets/images/icon-instagram.svg'
import twLogo from '../assets/images/icon-twitter.svg'
import ytLogo from '../assets/images/icon-youtube.svg'
import upLogo from '../assets/images/icon-up.svg'
import downLogo from '../assets/images/icon-down.svg'
 
const handleLogo = (network) =>{
  if(network === 'Facebook'){
    return fbLogo
  }
  if(network === 'YouTube'){
    return ytLogo
  }
  if(network === 'Twitter'){
    return twLogo
  }
  if(network === 'Instagram'){
    return igLogo
  }
}

const handleColor = (network) =>{
  if(network === 'Facebook'){
    return 'bg-Facebook'
  }
  if(network === 'YouTube'){
    return 'bg-YouTube'
  }
  if(network === 'Twitter'){
    return 'bg-Twitter'
  }
  if(network === 'Instagram'){
    return 'bg-Instagram-Gradient'
  }
}

const OverviewCard = ({user, audienceType, audience, network, isUp, today}) => {

  return (
    <article className="bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px] overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125">
      <div className={`${handleColor(network)} h-[4px] mb-8`}></div>
      <div className='flex items-center justify-center gap-2'>
        <img src={handleLogo(network)} alt={network} />
        <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
      </div>
      <p className='text-[56px] font-bold text-Very-Dark-Blue dark:text-white'>{audience}</p>
      <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6'>{audienceType}</p>
      <div className='flex items-center justify-center gap-1'>
        <img src={isUp ? upLogo: downLogo} alt="iconarrow" />
        <p className={`text-xs font-bold ${isUp? 'text-Lime-Green': 'text-Bright-Red'}`}>{today} Today</p>
      </div>
    </article>
  )
}

export default OverviewCard

export const OverviewTodayCard = ({network, statsType, stats, porcentage, isUp}) => {
  return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] cursor-pointer hover:brightness-95 dark:bg-Dark-Desaturated-Blue hover:dark:brightness-125'>
      <div className='flex items-center justify-between'>
        <p className='text-Dark-Grayish-Blue'>{statsType}</p>
        <img src={handleLogo(network)} alt="" />
      </div>
      <div className='flex justify-between'>
        <p className='text-[42px] font-bold text-Very-Dark-Blue dark:text-white'>{stats}</p>
        <div className='flex items-center justify-center gap-1'>
          <img src={isUp ? upLogo: downLogo} alt="iconarrow" />
          <p className={`text-xs font-bold ${isUp? 'text-Lime-Green': 'text-Bright-Red'}`}>{porcentage} Today</p>
        </div>
      </div>
    </article>
  )
}
