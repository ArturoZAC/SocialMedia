
import data from '../../data/data.json'
import OverviewCard, { OverviewTodayCard } from './OverviewCard'

// console.log(data.overview)

const convertNumberToK = (number) =>{
  if(number >= 10000){
    number = number / 1000;
    return `${number}k`
  }
  return number
}

const OverviewContainer = () => {

  return (
    <section className='max-w-[1440px] flex flex-wrap gap-[30px] justify-center absolute top-[191px] left-0 right-0 mx-auto'>
        {
            data.overview.map(ob => (
                <OverviewCard 
                key={ob.id}
                user={ob.user}
                audienceType={ob.audienceType}
                audience={convertNumberToK(ob.audience)}
                network={ob.network}
                isUp={ob.isUp}
                today={ob.today}
                />
            ))
        }
    </section>
  )
}

export default OverviewContainer;

export const OverviewTodayContainer = () => {
  return (

    <section>
      <h2 className='text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8'>Overview Today</h2>
      <div className='flex flex-wrap'>
        {
          data['overview-today'].map(ob => (
            <OverviewTodayCard 
              key={ob.id} 
              network={ob.network}
              statsType={ob.statsType}
              stats={convertNumberToK(ob.stats)}
              porcentage={ob.porcentage}
              isUp={ob.isUp}
            />
          ))
        }
      </div>
    </section>

  )
}
