import './Card.css';
import male from '../icons/male.png';
import female from '../icons/female.png';

// function Card(props)
function Card ({person})
{
    //let {elem} = props.elem;
    const photoUrl = person.photo.startsWith('http')
        ? person.photo
        : process.env.PUBLIC_URL + '/' + person.photo;

    return(
        <div className='card'> 
            <img src={photoUrl} alt="photo"/>
            <div className='name'>
                {person.name} {person.surname}
            </div>
            <div className='gender'>
                {/* Используем person.pol вместо elem.pol */}
                <img src={person.pol === 'male' ? male : female} alt="Gender"/>   
            </div>
            <div className='age'>
                {person.age}
            </div>
        </div>
    );
        //#region 
            // <div key={props.elem} className='card'>
            //     <img src={rocess.env.PUBLIC_URL + '/' +props.elem.photo} alt="photo"/>
            //     <div className='name'>
            //         {elem.name} {elem.surname}
            //     </div>
            //     <div className='gender'>
            //         <img src={elem.pol === 'male' ? male : female} alt="Gender"/>   
            //     </div>
            //     <div className='age'>
            //         {elem.age}
            //     </div>
            // </div>
        //#endregion
            
}
export default Card;