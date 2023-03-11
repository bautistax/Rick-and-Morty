import Card from '../card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose} = props;
   return <div className={styles.container}>
        <div className={`${styles.content_cards}`} >
      {
      characters.map((char)=>(
         <Card
         key={char.name}
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         id={char.id}
         status={char.status}
         origin={char.origin?.name}
         onClose={()=> onClose(char.id)}
         />
      ))}
      </div>
   </div>;
}
