
import DzieckoNaukaPropsow from './DzieckoNaukaPropsow';

const NaukaPropsow = () => {
  const wywolajAlertHandler = (zmienna) => {
    alert(zmienna);
  };

  return (
   <div>
     <p>Jestem nauką propsów</p>
     <DzieckoNaukaPropsow onWywolajAlert={wywolajAlertHandler} maslo={13} />
   </div>
 )
};


export default NaukaPropsow;